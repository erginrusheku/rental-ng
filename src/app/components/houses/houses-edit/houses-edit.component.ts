import { Router } from '@angular/router';
import { HouseService } from './../../services/house.service';
import { Component, OnInit } from '@angular/core';
import { House } from '../houses.model';

@Component({
  selector: 'app-houses-edit',
  templateUrl: './houses-edit.component.html',
  styleUrls: ['./houses-edit.component.css']
})
export class HousesEditComponent implements OnInit {

  house?:  House;

  constructor(private houseService: HouseService,
    private router: Router) { }

  ngOnInit() {
    let url = this.router.url;
    url = url.replace("/edit", "")
    let id = url.substring(url.lastIndexOf('/') + 1);
    this.house = this.houseService.getHouseById(id);
  }

  onSave(){
    let id = this.house!.id;
    this.houseService.update(id, this.house!);
    this.router.navigate(['/houses', this.house!.id, 'view']);
  }

}



