import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Note } from '../models/note';

@Injectable()
export class NotesService {

  private _notes: BehaviorSubject<Note[]>;
  private dataStore: {
    notes: Note[]
  }
  constructor(private http:HttpClient) { 
    this.dataStore={notes: []};
    this._notes = new BehaviorSubject<Note[]>([]);
  }
  get notes(): Observable<Note[]> {
    return this._notes.asObservable();
  }
  loadAll(){
    const notesUrl='https://localhost:44303/Notes';
    return this.http.get<Note[]>(notesUrl)
      .subscribe(
        data => {
          this.dataStore.notes = data;
          this._notes.next(Object.assign({}, this.dataStore).notes);
        },
        error => {
          console.log("failed", error);
        }
      )
    ;
  }
}
