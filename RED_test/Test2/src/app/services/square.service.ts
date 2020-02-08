import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Square } from '../models/square.model';

const URL = 'https://jsonplaceholder.typicode.com/posts';

@Injectable()
export class SquareService {

  constructor(
    private http: HttpClient
  ) {
  }

  getSquares(): Observable<Square> {
    return this.http.get<Square>(URL);
  }
}
