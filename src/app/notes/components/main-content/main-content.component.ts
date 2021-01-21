import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { INote } from '../../models/note';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})

export class MainContentComponent implements OnInit {

  displayedColumns: string[] = ['title','content','action'];
  dataSource : MatTableDataSource<INote>;

  notes:Observable<INote[]>;
  
  constructor(
    private notesService:NotesService
  ) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.notes = this.notesService.getNotes();

    this.notes.subscribe(data => {      
      this.dataSource = new MatTableDataSource<INote>(data);
      this.dataSource.paginator= this.paginator;
     });
  }

}
