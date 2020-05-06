import {
    Injectable
}
from '@angular/core';

@Injectable({ providedIn: 'root' }) export class NavbarService {

    noUserVis: boolean = true; // if no user logged in
    UserVis: boolean = false; // if user logged in

    constructor() {
        this.checkSession();
    }

    checkSession() {
        if(sessionStorage.length > 0) {
            this.noUserVis = false;
            this.UserVis = true;
        }
        else {
            this.noUserVis = true;
            this.UserVis = false;
        }
    }
    // begin invalidateSession/logout
    invalidateSession() {
        if(sessionStorage.length > 0) {
            this.noUserVis = true;
            this.UserVis = false;
        }
        else {
            this.noUserVis = false;
            this.UserVis = true;
        }
        sessionStorage.clear
    };
    // end invalidateSession/logout

}
