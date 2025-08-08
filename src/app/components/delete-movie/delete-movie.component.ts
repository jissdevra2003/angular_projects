import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.sevice';
import { ActivatedRoute, RouterModule,Router } from '@angular/router';

@Component({
  selector: 'app-delete-movie',
  imports: [RouterModule],
  templateUrl: './delete-movie.component.html',
  styleUrl: './delete-movie.component.css'
})
export class DeleteMovieComponent {

movieId: number = 0;
 constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private router: Router
  ) {}


ngOnInit() {
this.movieId = Number(this.route.snapshot.paramMap.get('id'));
}


deleteMovie()
{
  this.movieService.deleteMovie(this.movieId)
.subscribe(response=>{ 
console.log('Movie deleted successfully');
// Reset movieId after deletion
this.movieId = 0;
alert('Movie deleted successfully');
// Navigate back to the movie list or dashboard after successful deletion
this.router.navigate(['/movies/list-movies']);
}
);

}
cancel()
{
this.router.navigate(['/movies/list-movies']);
}

}
