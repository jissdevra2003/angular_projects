export class Movie {
 id?:number;
title:string;
description:string;
releaseDate:string;
director:string;
rating:number;
genre:string;

constructor() {
this.id = undefined; // Optional ID for new movies
this.title = '';
this.description = '';
this.releaseDate = '';
this.director = '';
this.rating = 0;
this.genre = '';

}
}
