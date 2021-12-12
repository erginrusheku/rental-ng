
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { House } from '../houses.model';
import { HouseService } from '../../services/house.service';



@Component({
  selector: 'houses-list',
  templateUrl: './houses-list.component.html',
  styleUrls: ['./houses-list.component.css']
})
export class HousesListComponent implements OnInit {

  houses:  House[] = [];

  constructor(private router: Router, private houseService: HouseService) { }

  ngOnInit(){
    this.houses = this.houseService.getHouses();
  }

  addHouse(){
    this.router.navigate(['/houses/add']);
  }

  onHouseClick(house: House){
    this.router.navigate(['/houses', house.id, 'view']);
  }
}
