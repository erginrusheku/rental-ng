
import { Component } from "@angular/core";
import { Router } from "@angular/router";


@Component({
  selector: 'app-rental',
templateUrl: './rental-component.html',
styleUrls: ['./rental-component.css' ]
})



export class RentalComponent {

  constructor(private router: Router) { }


  OnBack() {
    this.router.navigate(['./'])
  }
}


