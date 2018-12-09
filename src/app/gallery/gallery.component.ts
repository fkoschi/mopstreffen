import { Component, OnInit } from '@angular/core';

import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation
} from 'ngx-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

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

  ngOnInit() {
    this.galleryOptions = [
      {
        width: '800px',
        height: '800px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];
    this.galleryImages = [
      {
        small: '../../assets/images/gallery/2015_1.jpg',
        medium: '../../assets/images/gallery/2015_1.jpg',
        big: '../../assets/images/gallery/2015_1.jpg'
      },
      {
        small: '../../assets/images/gallery/2015_2.jpg',
        medium: '../../assets/images/gallery/2015_2.jpg',
        big: '../../assets/images/gallery/2015_2.jpg'
      },
      {
        small: '../../assets/images/gallery/2015_3.jpg',
        medium: '../../assets/images/gallery/2015_3.jpg',
        big: '../../assets/images/gallery/2015_3.jpg'
      },
      {
        small: '../../assets/images/gallery/2015_4.jpg',
        medium: '../../assets/images/gallery/2015_4.jpg',
        big: '../../assets/images/gallery/2015_4.jpg'
      },
      {
        small: '../../assets/images/gallery/2015_5.jpg',
        medium: '../../assets/images/gallery/2015_5.jpg',
        big: '../../assets/images/gallery/2015_5.jpg'
      },
      {
        small: '../../assets/images/gallery/2015_6.jpg',
        medium: '../../assets/images/gallery/2015_6.jpg',
        big: '../../assets/images/gallery/2015_6.jpg'
      }
    ];
  }
}
