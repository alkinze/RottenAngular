//export so we can use it in our other files
export class Reviews{

    //variable declarations
    acting:number;
    availability:string;
    category:string;
    cinematography:number;
    genre:string;
    runtime:number;
    story:number;
    synopsis:string;
    mpaaRating:string;
    overallRating:number;
    lengthTime:string;
    reviewName:string;
    audioscore:number;

    constructor(acting:number, availability:string, category:string, cinematography:number,
        genre:string, runtime:number, story:number, synopsis:string, mpaarating:string, 
        overallrating:number, lengthtime:string, reviewname:string, audioscore:number) {
            this.acting = acting;
            this.availability = availability;
            this.category = category;
            this.cinematography = cinematography;
            this.genre = genre;
            this.runtime = runtime;
            this.story = story;
            this.synopsis = synopsis;
            this.mpaaRating = mpaarating;
            this.overallRating = overallrating;
            this.lengthTime = lengthtime;
            this.reviewName = reviewname;
            this.audioscore = audioscore;
        }//end constructor

        //setters and getters
        public getActing():number{
            return this.acting;
        }

        public setActing(acting:number){
            this.acting = acting;
        }

        public getAvailability():string{
            return this.availability;
        }

        public setAvailability(availability:string){
            this.availability = availability;
        }

        public getCategory():string{
            return this.category;
        }

        public setCategory(category:string){
            this.category = category;
        }

        public getCinematography():number{
            return this.cinematography;
        }

        public setCinematography(cinematography:number){
            this.cinematography = cinematography;
        }

        public getGenre():string{
            return this.genre;
        }

        public setGenre(genre:string){
            this.genre = genre;
        }

        public getRuntime():number{
            return this.runtime;
        }

        public setRuntime(runtime:number){
            this.runtime = runtime;
        }

        public getStory():number{
            return this.story;
        }

        public setStory(story:number){
            this.story = story;
        }

        public getSynopsis():string{
            return this.synopsis;
        }

        public setSynopsis(synopsis:string){
            this.synopsis = synopsis;
        }

        public getMpaarating():string{
            return this.mpaaRating;
        }

        public setMpaarating(mpaarating:string){
            this.mpaaRating = mpaarating;
        }

        public getOverallrating():number{
            return this.overallRating;
        }

        public setOverallrating(overallrating:number){
            this.overallRating = overallrating;
        }

        public getLengthtime():string{
            return this.lengthTime;
        }

        public setLengthtime(lengthtime:string){
            this.lengthTime = lengthtime;
        }

        public getReviewname():string{
            return this.reviewName;
        }

        public setReviewname(reviewname:string){
            this.reviewName = reviewname;
        }

        public getAudioscore():number{
            return this.audioscore;
        }

        public setAudioscore(audioscore:number){
            this.audioscore = audioscore;
        }

}//end reviews class