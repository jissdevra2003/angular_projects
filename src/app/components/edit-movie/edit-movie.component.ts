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

movieName:string='';
movie:any = {}; // Placeholder for movie data, to be replaced with actual movie object
private datePipe = inject(DatePipe);
constructor(private route: ActivatedRoute,
    private movieService: MovieService,
    private router: Router
    
) { }

//ngOnInit gets executed when the component is rendered
//It is used to fetch the movie details based on the title from the route parameters
ngOnInit()
{
 // Get the movie title from the route
  this.movieName = this.route.snapshot.paramMap.get('title') ?? '';
if(this.movieName)
{
this.movieService.getMovieByTitle(this.movieName)
.subscribe(response=>{
console.log('Movie fetched successfully:', response);
this.movie = response.data; // Assign the fetched movie data to the component's movie property


// Format the release date to 'yyyy-MM-dd' format for the input field
this.movie.releaseDate = this.datePipe.transform(this.movie.releaseDate, 'yyyy-MM-dd');

})
}
}

onSubmit()
{
  this.movieService.updateMovie(this.movieName,this.movie).
subscribe(response => {
  console.log(response.message);
console.log('Movie updated successfully:', response.data);
  // Navigate back to the movie list or dashboard after successful update
  this.router.navigate(['/movies/list-movies']);})
}

cancelEdit() {
  // Navigate back to the movie list or dashboard without saving changes
  this.router.navigate(['/movies/list-movies']);

}
}
