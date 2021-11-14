export class Houses {
public image: string
public title: string;
public street: string;
public meters: string;
public price: string;
public numbers: number;


constructor(img: string, title: string, street: string,meters: string, price: string,numbers: number)  {
  this.image = img;
  this.title = title;
  this.street = street;

  this.meters = meters;
  this.price = price;
  this.numbers = numbers;
}



}

