import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../movie';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
 
@Injectable({
  providedIn: 'root'
})

export class MovieService {
private apiUrl = 'http://localhost:5050/api/movies'; 

//Injects Angular's HttpClient service to enable HTTP requests (GET, POST, etc.) 
//within this component or service
constructor(private http: HttpClient) { }

addMovie(movie:Movie):Observable<any>
{
return this.http.post<Movie>(`${this.apiUrl}/add-movie`,movie)
}

getMovies():Observable<Movie[]>
 {
return this.http.get<Movie[]>(`${this.apiUrl}/get-movies`);
}


getMovieByTitle(title: string): Observable<Movie> {
  return this.http.get<Movie>(`${this.apiUrl}/get-movie/${encodeURIComponent(title)}`);

}

updateMovie(movie: Movie): Observable<Movie> {
console.log('Updating movie:', movie);
  return this.http.put<Movie>(`${this.apiUrl}/update-movie/${encodeURIComponent(movie.title)}`, movie);

}

deleteMovie(id: number): Observable<void> {
return this.http.delete<void>(`${this.apiUrl}/delete-movie/${encodeURIComponent(id)}`);
}
}