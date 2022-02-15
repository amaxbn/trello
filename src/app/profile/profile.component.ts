import { Component, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';
import {IUsers} from '../interfaces/users.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public profile$: Observable<IUsers>

  constructor() {
    this.profile$ = of({id: 123, shortName: 'Maxim Myakishev'});
  }

  ngOnInit(): void {
  }

  public dropdown(): void {
  }

}
