import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HouseService } from '../../services/house.service';
import { House } from '../houses.model';

@Component({
  selector: 'app-houses-add',
  templateUrl: './houses-add.component.html',
  styleUrls: ['./houses-add.component.css']
})
export class HousesAddComponent implements OnInit {


  house?: House;

  constructor(private houseService: HouseService,
    private router: Router ,private route: ActivatedRoute) { }

  ngOnInit() {
    this.house = {};
  }

  onSave(){
    this.houseService.save(this.house!);
    this.router.navigate(['/houses', this.house!.id, 'view'],{relativeTo: this.route});
  }

}
