import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {NavbarService} from '../services/navbar.service';
import {Router} from '@angular/router';

@Component({selector: 'app-navbar', templateUrl: './navbar.component.html', styleUrls: ['./navbar.component.css']})
export class NavbarComponent implements OnInit {


    constructor(public nav : NavbarService, private router : Router) {}

    ngOnInit(): void {}

    viewProfile() {
        this.router.navigate(['/login']);
    }

}
