import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {
  @Input() profileID: string;

  constructor() { }

  ngOnInit() {
  }

}
