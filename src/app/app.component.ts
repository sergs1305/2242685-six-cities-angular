import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlacesListComponent } from './places-list/places-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PlacesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-template-project';

}
