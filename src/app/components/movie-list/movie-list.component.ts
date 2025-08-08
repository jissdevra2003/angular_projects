import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.sevice';
import { Movie } from '../../movie';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink,Router } from '@angular/router';
import { ApiResponse } from '../../api-response';


@Component({
  selector: 'app-movie-list',
  imports: [FormsModule, CommonModule,RouterLink],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  movies: Movie[] = [];

  constructor(private movieService: MovieService,private router:Router) { }

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies(): void {
    this.movieService.getMovies()
      .subscribe((data: ApiResponse<Movie[]>) => {
        this.movies = data.data || [];
        if (this.movies.length === 0) {
          alert('No movies available. Please add some movies first.');
          this.router.navigate(['/movies/add-movie'])
        }
        console.log('Movies loaded successfully:', this.movies);

      });

  }

}
