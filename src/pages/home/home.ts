import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Image } from '../../models/image';
import { GalleryApi } from '../../providers';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public currentImages: Image[];

  constructor(public navCtrl: NavController, private galleryApi: GalleryApi) {
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
    console.log('loadmore');
    this.galleryApi.get().subscribe((res: any) => {
      this.currentImages = [...this.currentImages, ...res.pugs];
    });
  }

  trackItems(index: number) {
    return index;
  }

  async detectScrolling(event? : any) {
    console.log(event);
    const scrollElement = event.scrollElement;
    const scrollHeight = scrollElement.scrollHeight;
    const currentScrollDepth = event.scrollTop;
    const targetPercent = 80;
    let triggerDepth = ((scrollHeight / 100) * targetPercent);
    console.log(currentScrollDepth, triggerDepth);
    if(currentScrollDepth > triggerDepth) {
      this.loadMore();
    }
  }

}
