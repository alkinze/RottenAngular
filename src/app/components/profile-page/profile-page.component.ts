import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  user:string;
  constructor(public nav:NavbarService) { }

  ngOnInit(): void {
    this.nav.checkSession();
    this.user = sessionStorage.getItem('user')
  }

}
