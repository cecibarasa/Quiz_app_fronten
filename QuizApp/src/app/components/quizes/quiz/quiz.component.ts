import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/service/quiz.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authenication/authentication.service';
import { Quiz } from 'src/app/models/quiz';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  questions;
  seconds: number;
  duration;
  attempt: number;
  title: string;
  description: string;
  answers: any = {};
  content: any = [];

  constructor(private router: Router, public quizService: QuizService) {}

  ngOnInit() {
    this.quizService.seconds = 0;
    this.quizService.qnProgress = 0;

    // this.quizService.quiz = [{title:'', questions:[{content:'', answers:[]}]}]

    // {quiz_id: 1, user_answers:{"question_id":"answer"}}

    this.quizService.getQuizes().subscribe(
      (data: any) => {
        this.quizService.quiz = data;
        console.log(this.quizService.quiz);
        this.startTimer();
        this.router.navigate(['/quiz']);
      },
      (err: any) => {
        let { error } = err;
        this.quizService.quiz = error;
        this.questions = error[0].questions;
        this.answers = { quiz_id: error[0].id, user_answers: {} };
        this.startTimer();
        this.router.navigate(['/quiz']);
      }
    );
  }

  // currentQuestion(){
  //   for(var i = 0; i < questions.length; i++){
  //     this.quizService.seconds = 0;
  //     this.quizService.attempt = 0;

  //     this.quizService.getQuizes().subscribe(
  //       (data: any) => {
  //         this.quizService.quiz = data;
  //         console.log(this.quizService.quiz)
  //         this.startTimer();
  //         this.router.navigate(['/quiz']);
  //       },
  //       (err: any) => {
  //         let {error} = err
  //         this.quizService.quiz = error;
  //         console.log(this.quizService.quiz)
  //         // console.log(error)
  //         this.startTimer();
  //         this.router.navigate(['/quiz']);
  //       }
  //     );
  //   }
  // }

  startTimer() {
    this.quizService.duration = setInterval(() => {
      this.quizService.seconds++;
    }, 1000);
  }

  Answer(qID, choice) {
    this.answers.user_answers[`${qID}`] = choice;
    this.quizService.qnProgress++;
    if (this.quizService.qnProgress == this.questions.length) {
      clearInterval(this.quizService.duration);
      localStorage.setItem('user_answers', JSON.stringify(this.answers));
      // this.quizService.submitScore(this.answers);
      this.router.navigate(['/result']);
    }
    // for(var i = 0; i<index.length; i++){
    //   this.quizService[index];
    // }
    // console.log('trucktar')
    // this.quizService.quiz[this.quizService.attempt].answer = choice;
    // this.quizService.attempt++;
    // if (this.quizService.attempt == 10) {
    //   clearInterval(this.quizService.duration);
    //   this.router.navigate(['result'])
    // }
  }
}
