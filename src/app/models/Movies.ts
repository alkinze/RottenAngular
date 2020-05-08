export class Movies {

    movieId : number;
    movieName : string;

    constructor(movieid : number, moviename : string) {
        this.movieId = movieid;
        this.movieName = moviename;
    }

    public getMovieid(): number {
        return this.movieId;
    }

    public setMovieid(movieid : number) {
        this.movieId = movieid;
    }

    public getMoviename(): string {
        return this.movieName;
    }

    public setMoviename(moviename : string) {
        this.movieName = moviename;
    }
}
