import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SELLERS } from '../mocks';
import { ISeller } from '../interfases';

@Injectable()
export class SellersService {
  getSellers(): Observable<ISeller[]> {
    return of(SELLERS);
  }
}
