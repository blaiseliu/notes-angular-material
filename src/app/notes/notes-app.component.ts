import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-app',
  template: `
    <app-sidenav></app-sidenav>
  `,
  styles: [
  ]
})
export class NotesAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
