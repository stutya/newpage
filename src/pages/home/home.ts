import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Image } from '../../models/image';
import { GalleryApi } from '../../providers';
import { ChangeDetectorRef } from '@angular/core'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public currentImages: Image[];

  constructor(public navCtrl: NavController, private galleryApi: GalleryApi, private changeRef: ChangeDetectorRef) {
    this.loadImages();
  }

  loadImages(event? : any) {
    this.galleryApi.get().subscribe((res : any) => {
      this.currentImages = res.pugs;
      if(event){
        event.complete();
      }
    });
  }

  loadMore() {
    this.galleryApi.get().subscribe((res: any) => {
      this.currentImages = [...this.currentImages, ...res.pugs];
      console.log(this.currentImages.length);
    });
  }

  trackItems(index: number) {
    return index;
  }

  async detectScrolling(event? : any) {
    const scrollElement = event.scrollElement;
    const scrollHeight = scrollElement.scrollHeight;
    const currentScrollDepth = event.scrollTop;
    const targetPercent = 60;
    let triggerDepth = ((scrollHeight / 100) * targetPercent);
    if(currentScrollDepth > triggerDepth) {
      this.loadMore();
      this.changeRef.detectChanges();
    }
  }

}
