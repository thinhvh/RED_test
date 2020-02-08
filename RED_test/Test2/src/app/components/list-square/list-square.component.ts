import { Component, OnInit } from '@angular/core';
import { SquareService } from 'src/app/services/square.service';
import { Square } from 'src/app/models/square.model';

@Component({
  selector: 'app-list-square',
  templateUrl: './list-square.component.html',
  styleUrls: ['./list-square.component.scss']
})
export class ListSquareComponent implements OnInit {

  squares: Square[] = [];
  displaySquares: Square[] = [];

  get randomColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  constructor(
    private squareService: SquareService
  ) {
  }

  ngOnInit(): void {
    this.squareService.getSquares().subscribe((response: Square[]) => {
      this.squares = response
        .map((square: Square) => ({...square, clickTimes: 0, backgroundColor: this.randomColor}));
      this.displaySquares = this.squares.slice(0, 10);
    });
  }

  loadMore(): void {
    const length: number = this.displaySquares.length;
    this.displaySquares.push(...this.squares.slice(length, length + 10));
  }
}
