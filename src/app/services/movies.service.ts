import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpClientJsonpModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movies } from '../models/Movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  //get movie by name
  getMovieByName(name:string):Observable<Movies>{
    return this.http.get('http://localhost:8080/movies/name/' + name) as Observable<Movies>;
  }

  //add movie
  addMovie(movie:Movies){
    let header = new HttpHeaders().set('Content-Type', 'application/json');

    this.http.post('http://localhost:8080/movies/new', JSON.stringify(movie), {headers:header}).subscribe(
      () => { console.log("successful submit");},
      () => { console.log("failed submission");}
    );//end observable
  }

  //does the movie exist
  exists(name:string):Observable<boolean>{
    return this.http.get('http://localhost:8080/movies/exists/' + name) as Observable<boolean>;
  }

}
