import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';
import { HttpClient } from '../../node_modules/@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(svc: TestService, private http: HttpClient) {
    svc.printToConsole('a');
  }
  ngOnInit() {
    this.http.get('http://localhost:3000/posts')
    .subscribe(() => console.log('get the response'));
  }
}
