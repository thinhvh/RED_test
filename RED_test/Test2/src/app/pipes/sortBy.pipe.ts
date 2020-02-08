import { Pipe, PipeTransform } from '@angular/core';
import { Square } from '../models/square.model';

@Pipe({
  name: 'sortBy',
  pure: false
})
export class SortByPipe implements PipeTransform {
  transform(squares: Square[], sortBy: string): Square[] {
    return squares.slice()
      .sort((curr: Square, next: Square) => next[sortBy] - curr[sortBy]);
  }
}
