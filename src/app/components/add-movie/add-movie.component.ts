import { Component } from '@angular/core';
import { Movie } from '../../movie';
import { MovieService } from '../../services/movie.sevice';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.css'
})
export class AddMovieComponent {
newMovie:Movie=new Movie();

constructor(private movieService: MovieService,private router:Router) { }

submitMovie() {
this.movieService.addMovie(this.newMovie)
.subscribe((response)=> {
  console.log(response.message);
  this.newMovie = new Movie(); // Reset the form after submission
  alert(response.message || 'Movie addeddd successfully');
this.router.navigate(['/movies/list-movies']);
}
);
}
}
