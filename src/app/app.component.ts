import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, AddMovieComponent, MovieListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
