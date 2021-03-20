import { Component } from '@angular/core';
import { MenuItem } from './core/models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Farm';

  public routes: MenuItem[] = [
    { url: '/home', label: 'Home' },
    { url: '/worker', label: 'Workers' }
  ];
}
