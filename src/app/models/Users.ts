export class Users {

    usersid : number;

    username : string;
    pass : string;

    constructor(userid : number, username : string, pass : string) {
        this.usersid = userid;
        this.username = username;
        this.pass = pass;
    }

    public getuserid(): number {
        return this.usersid;
    }
    public setuserid(value : number) {
        this.usersid = value;
    }


    public getUsername(): string {
        return this.username;
    }

    public setUsername(username : string) {
        this.username = username;
    }

    public getPass(): string {
        return this.pass;
    }

    public setPass(pass : string) {
        this.pass = pass;
    }
}
