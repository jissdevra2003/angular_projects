import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-movies-dashboard',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './movies-dashboard.component.html',
  styleUrl: './movies-dashboard.component.css'
})
export class MoviesDashboardComponent {

}
