import { Component, OnInit } from '@angular/core';

import { IMasonryGalleryImage } from 'ngx-masonry-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  private urls: string[] = [
    '../../assets/images/2015/1.jpg',
    '../../assets/images/2015/2.jpg',
    '../../assets/images/2015/3.jpg',
    '../../assets/images/2015/4.jpg',
    '../../assets/images/2015/5.jpg',
    '../../assets/images/2015/6.jpg',
    '../../assets/images/2015/7.jpg',
    '../../assets/images/2015/8.jpg',
    '../../assets/images/2015/9.jpg',
    '../../assets/images/2015/10.jpg',
    '../../assets/images/2015/11.jpg',
    '../../assets/images/2015/12.jpg'
  ];

  constructor() {}

  ngOnInit() {}

  public get images(): IMasonryGalleryImage[] {
    return this.urls.map(
      m =>
        <IMasonryGalleryImage>{
          imageUrl: m
        }
    );
  }
}
