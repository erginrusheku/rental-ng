import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Houses } from './houses.model';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent {
houses:  Houses[] = [
  new Houses('https://cdn.vox-cdn.com/thumbor/frFQQhOsxl8DctGjkR8OLHpdKMs=/0x0:3686x2073/1200x800/filters:focal(1549x743:2137x1331)/cdn.vox-cdn.com/uploads/chorus_image/image/68976842/House_Tour_Liverman_3D6A3138_tour.0.jpg', 'House 1+1','Dibra Street,Tirane', "65m2","85000 euro", 683317009),
  new Houses('https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607', 'Apartament 2+1','Kavaja Street,Tirane', "85m2","95000 euro", 683317009),
  new Houses('https://images.adsttc.com/media/images/5e1d/02c3/3312/fd58/9c00/06e9/large_jpg/NewHouse_SA_Photo_01.jpg?1578959519', 'House 2+1','Barrikada Street,Tirane', "105m2","125000 euro", 683317009),
  new Houses('https://media.architecturaldigest.com/photos/5a8edf4e891f6e6a41b11fbf/16:9/w_2560%2Cc_limit/SanMarino.jpg', 'House 1+1+1','Bardhyl Street,Tirane', "115m2","155000 euro", 683317009),
  new Houses('https://housinganywhere.imgix.net/room/1753062/3dfbe562-45ac-403e-aec7-6ffb8b7a9483.jpg?auto=format&fit=clip&h=300&orient=0&w=490&ixlib=react-9.2.0', 'House 3+1','Durres Street,Tirane', "150m2","300000 euro", 683317009),
  new Houses('https://www.realestate.al/thumbs/640x/foto/1629799498-Apartament%20qera%20libri%20universitar...JPG', 'Office 4+1','Myslym Shyri Street,Tirane', "200m2","450000 euro", 683317009)
];


  constructor(private router: Router) { }



  OnBack() {
    this.router.navigate(['./'])
  }
}
