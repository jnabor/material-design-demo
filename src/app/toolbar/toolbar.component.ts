import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  gitLogoPath: string = "../assets/img/GitHub-Mark-Light-32px.png";

  constructor() { }

  ngOnInit() {
  }

}
