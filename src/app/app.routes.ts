import { Routes } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { MoviesDashboardComponent } from './components/movies-dashboard/movies-dashboard.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';
import { DeleteMovieComponent } from './components/delete-movie/delete-movie.component';

export const routes: Routes = [

// Main route for movies dashboard
// /movies
{path:'movies',component: MoviesDashboardComponent,
// Nested child routes under /movies
children:[
///movies/list-movies
{path:'list-movies', component: MovieListComponent},
///movies/add-movie
{path:'add-movie', component: AddMovieComponent},
///movies/movie-info/:id
{path:'movie-info/:id', component: MovieInfoComponent},
///movies/edit-movie/:name
{path:'edit-movie/:title', component: EditMovieComponent},
///movies/delete-movie/:id
{path:'delete-movie/:id', component: DeleteMovieComponent}

],
},
// Wildcard route to catch unknown paths and redirect to /movies
// Example URL: /unknown-path → redirects to /movies
{path:'**', redirectTo: '/movies', pathMatch: 'full'},

];
