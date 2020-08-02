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

  constructor(private router: Router, private quizservice: QuizService,private authService: AuthenticationService,) { }

  ngOnInit() {

    this.quizservice.seconds = 0;
    this.quizservice.attempt = 0;

    this.quizservice.getQuizes().subscribe(
      (data: any) => {
        this.quizservice.questions = data;
        console.log(this.quizservice.questions)
        this.startTimer();
      }
    );
  }

  startTimer() {
    this.quizservice.duration = setInterval(() => {
      this.quizservice.seconds++;
    }, 1000);
  }

}
