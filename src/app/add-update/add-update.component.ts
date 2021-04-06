import { Component, OnInit } from '@angular/core';
import { Genre } from '../models/genre';

@Component({
  selector: 'mm-add-update',
  templateUrl: './add-update.component.html',
  styleUrls: ['./add-update.component.scss']
})
export class AddUpdateComponent implements OnInit {
  updating:boolean;
  title: string;
  release_date: number;
  genre: Genre;
  length: number;
  constructor() { }

  ngOnInit(): void {
    this.updating = false;
  }

  update(){

  }

  addMovie(){

  }

}
