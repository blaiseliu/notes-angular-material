import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Note } from '../../models/note';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  notes: Observable<Note[]>;
  
  constructor(
    private notesService:NotesService
  ) { }

  ngOnInit(): void {
    this.notes = this.notesService.notes;
    this.notesService.loadAll();

    this.notes.subscribe(data => {
      console.log(data);
    });
  }

}
