import { Component, OnInit } from '@angular/core';
import { QuizService } from "src/app/service/quiz.service";
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authenication/authentication.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions: any =[];
  seconds: number;
  duration;
  attempt: number;
  title: string
  description: string
  answers: any = [];
  content: any = [];

  constructor(private router: Router, public quizService: QuizService) { }

  ngOnInit() {

    this.quizService.seconds = 0;
    this.quizService.attempt = 0;

    this.quizService.getQuizes().subscribe(
      (data: any) => {
        this.quizService.questions = data;
        console.log(this.quizService.questions)
        this.startTimer();
        this.router.navigate(['/quiz']);
      },
      (err: any) => {
        let {error} = err
        this.quizService.questions = error;
        console.log(this.quizService.questions)
        // console.log(error)
        this.startTimer();
        this.router.navigate(['/quiz']);
      }
    );
  }

  startTimer() {
    this.quizService.duration = setInterval(() => {
      this.quizService.seconds++;
    }, 1000);
  }

  Answer() {
    console.log('trucktar')
    // this.quizService.questions[this.quizService.attempt].answer = choice;
    // this.quizService.attempt++;
    // if (this.quizService.attempt == 10) {
    //   clearInterval(this.quizService.duration);
    //   this.router.navigate(['result'])
    // }
  }

}
