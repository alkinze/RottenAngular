import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  

  constructor(public nav:NavbarService) { }

  ngOnInit(): void {

  }


}
