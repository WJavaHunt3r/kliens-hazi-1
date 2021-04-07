import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from "@angular/core";
import { Movie } from '../models/movie';
@Component({
  selector: 'mm-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.scss']
})
export class DeleteMovieComponent implements OnInit {

   @Input()
    movie: Movie;

    @Output()
    ok = new EventEmitter<void>();

    @Output()
    cancel = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  initParameters(inputs?: {movie: Movie}, outputs?: {cancel: (...args: any[])=> any, ok: (...args: any[])=> any}){
    for (let prop in inputs)
          this[prop] = inputs[prop];
        for (let prop in outputs)
          (this[prop] as EventEmitter<any>).subscribe(outputs[prop]);
  }
}
