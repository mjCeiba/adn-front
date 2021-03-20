import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../models/models';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less']
})
export class NavBarComponent implements OnInit {

  @Input()
  public routes: Array<MenuItem>;

  constructor() { }

  ngOnInit(): void {
  }

}
