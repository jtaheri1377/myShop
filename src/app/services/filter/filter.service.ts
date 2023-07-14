import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  public filterData: any;
  SubjectFilterData = new Subject<string>();

  constructor() { }



}
