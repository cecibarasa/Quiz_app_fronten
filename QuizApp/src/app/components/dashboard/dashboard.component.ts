import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/service/quiz.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private quizservice: QuizService,private route:Router) { }

  ngOnInit(): void {
  }

  // onQuiz(name: string, email: string) {
  //   this.quizservice.insertParticipant(name, email).subscribe(
  //     (data: any) => {
  //       localStorage.clear();
  //       localStorage.setItem('user', JSON.stringify(data));
  //       this.route.navigate(['/quiz'])
        
  //     }
  //   );
  // }

}
