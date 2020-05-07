import {Movies} from './Movies';

export class Recommendations {

    recommendid : number;
    movie : Movies;
    sender : string;
    receiver : string;

    constructor(recommendid : number, movies : Movies, sender : string, receiver : string) {
        this.recommendid = recommendid;
        this.movie = movies;
        this.receiver = receiver;
        this.sender = sender;
    }
    public getrecommendid(): number {
        return this.recommendid;
    }
    public setrecommendid(recommendid : number) {
        this.recommendid = recommendid;
    }
    public getMovies(): Movies {
        return this.movie;
    }

    public setMovies(movies : Movies) {
        this.movie = movies;
    }

    public getSender(): string {
        return this.sender;
    }

    public setSender(sender : string) {
        this.sender = sender;
    }

    public getMoviename(): string {
        return this.receiver;
    }

    public setMoviename(moviename : string) {
        this.receiver = this.receiver;
    }


}
