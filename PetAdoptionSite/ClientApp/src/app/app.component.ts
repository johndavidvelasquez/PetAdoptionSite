import { Component, Input } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  @Input() public compTitle;

  public title = '';
  public message= "";
}
