import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpClientJsonpModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Users} from '../models/Users';

@Injectable({providedIn: 'root'})
export class UsersService {

    constructor(private http : HttpClient) {}

    // getusers by username
    getUsersByName(name : string): Observable < Users > {
        return this.http.get('http://13.58.248.241:8085/user/name/' + name)as Observable < Users >;
    }

    // send users
    insertUser(user : Users) {

        let header = new HttpHeaders().set('Content-Type', 'application/json');

        this.http.post('http://13.58.248.241:8085/user/new', JSON.stringify(user), {headers: header}).subscribe(() => {
            console.log("successful submit");
        }, () => {
            console.log("failed submission");
        }); // end observable

    }

}
