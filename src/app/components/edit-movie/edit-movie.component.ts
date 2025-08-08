import { Component,inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../services/movie.sevice';
import { Movie } from '../../movie';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-movie',
  imports: [FormsModule,CommonModule],
providers: [DatePipe],
  templateUrl: './edit-movie.component.html',
  styleUrl: './edit-movie.component.css'
})
export class EditMovieComponent {
movie:any = {}; // Placeholder for movie data, to be replaced with actual movie object
private datePipe = inject(DatePipe);
constructor(private route: ActivatedRoute,
    private movieService: MovieService,
    private router: Router
    
) { }

ngOnInit()
{
 // Get the movie title from the route
  const movieName = this.route.snapshot.paramMap.get('title');
if(movieName)
{
this.movieService.getMovieByTitle(movieName)
.subscribe(response=>{
console.log('Movie fetched successfully:', response);
this.movie = response;

this.movie.releaseDate = this.datePipe.transform(this.movie.releaseDate, 'yyyy-MM-dd');

})
}
}

onSubmit()
{
  this.movieService.updateMovie(this.movie).
subscribe(response => {
  console.log('Movie updated successfully:', response);
  // Navigate back to the movie list or dashboard after successful update
  this.router.navigate(['/movies/list-movies']);})
}

cancelEdit() {
  // Navigate back to the movie list or dashboard without saving changes
  this.router.navigate(['/movies/list-movies']);

}
}
