import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../movie';
import { Observable } from 'rxjs';
import { ApiResponse } from '../api-response';
import { DatePipe } from '@angular/common';
 
// The MovieService class is responsible for handling all movie-related HTTP requests
// It uses Angular's HttpClient to communicate with the backend API
// The service is provided in the root injector, making it available throughout the application and to all components that inject it
@Injectable({

  providedIn: 'root'
})

export class MovieService {
private apiUrl = 'http://localhost:5050/api/movies'; 

//Injects Angular's HttpClient service to enable HTTP requests (GET, POST, etc.) 
//within this component or service
constructor(private http: HttpClient) { }


//ApiResponse is a generic interface that defines the structure
// of the response from the backend API

addMovie(movie:Movie):Observable<ApiResponse<Movie>>
{
//just return the response from the backend API 
return this.http.post<ApiResponse<Movie>>(`${this.apiUrl}/add-movie`,movie)
}

getMovies():Observable<ApiResponse<Movie[]>>
 {
return this.http.get<ApiResponse<Movie[]>>(`${this.apiUrl}/get-movies`);
}


getMovieByTitle(title: string): Observable<ApiResponse<Movie>> {
  return this.http.get<ApiResponse<Movie>>(`${this.apiUrl}/get-movie/${encodeURIComponent(title)}`);

}

updateMovie(movieName:string,movie: Movie): Observable<ApiResponse<Movie>> {
console.log('Updating movie:', movie);
  return this.http.put<ApiResponse<Movie>>(`${this.apiUrl}/update-movie/${encodeURIComponent(movieName)}`, movie);

}

deleteMovie(id: number){
return this.http.delete<void>(`${this.apiUrl}/delete-movie/${encodeURIComponent(id)}`);
}
}