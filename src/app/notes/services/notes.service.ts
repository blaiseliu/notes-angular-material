import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable, of } from 'rxjs';

import { INote } from '../models/note';

@Injectable()
export class NotesService {

  constructor(private http:HttpClient) { 
      
  }
  getNotes(): Observable<INote[]> {
    const notesUrl='https://localhost:44303/Notes';
    return this.http.get<INote[]>(notesUrl);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
