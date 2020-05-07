export class Movies {

    movieid : number;
    moviename : string;

    constructor(movieid : number, moviename : string) {
        this.movieid = movieid;
        this.moviename = moviename;
    }

    public getMovieid(): number {
        return this.movieid;
    }

    public setMovieid(movieid : number) {
        this.movieid = movieid;
    }

    public getMoviename(): string {
        return this.moviename;
    }

    public setMoviename(moviename : string) {
        this.moviename = moviename;
    }
}
