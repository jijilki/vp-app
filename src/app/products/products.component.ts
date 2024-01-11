import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: 'https://vijaypackages.s3.ap-south-1.amazonaws.com/images-export/boxes.jpg',
      title: 'First slide',
      subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    };
    this.slides[1] = {
      id: 1,
      src: 'https://vijaypackages.s3.ap-south-1.amazonaws.com/images-export/corrugatedpaper.jpg',
      title: 'Second slide',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
    this.slides[2] = {
      id: 2,
      src: 'https://vijaypackages.s3.ap-south-1.amazonaws.com/images-export/boxes.jpg',
      title: 'Third slide',
      subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    }
  }

}
