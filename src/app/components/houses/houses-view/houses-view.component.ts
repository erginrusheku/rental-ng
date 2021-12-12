import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HouseService } from '../../services/house.service';
import { House } from '../houses.model';

@Component({
  selector: 'app-house-view',
  templateUrl: './houses-view.component.html',
  styleUrls: ['./houses-view.component.css']
})
export class HousesViewComponent implements OnInit {

  house?: House;

  constructor(private houseService: HouseService, private router: Router) { }

  ngOnInit(): void {

    let url = this.router.url;
    url = url.replace("/view", "")
    let id = url.substring(url.lastIndexOf('/') + 1);
    this.house = this.houseService.getHouseById(id);
  }

  onBackBtn(){
    this.router.navigate(['/houses']);
  }

  onEdit() {
    this.router.navigate(['/houses', this.house?.id, 'edit']);
  }

  onDelete(){
    let id = this.house?.id;
    this.houseService.delete(id);
    this.router.navigate(['/houses']);
  }

}
