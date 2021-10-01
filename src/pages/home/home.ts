import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public currentImages: any;
  constructor(public navCtrl: NavController) {
    this.currentImages = [
      "http://27.media.tumblr.com/tumblr_lj4x7uXySA1qcbrufo1_500.jpg",
      "http://24.media.tumblr.com/tumblr_lteechLckg1qb08qmo1_500.jpg",
      "http://25.media.tumblr.com/tumblr_ljguyvQfz81qzy9e6o1_500.jpg",
      "http://25.media.tumblr.com/tumblr_mcmthlSKeN1r0wqrdo1_500.gif",
      "http://27.media.tumblr.com/tumblr_ls6tpnEwe71r3ip8io1_500.jpg",
      "http://25.media.tumblr.com/tumblr_mbfl4luabM1qb08qmo1_500.jpg",
      "http://37.media.tumblr.com/tumblr_mbg13ySRTZ1qbye9vo1_500.png",
      "http://30.media.tumblr.com/tumblr_lisw5dD4Pu1qbbpjfo1_400.jpg",
      "http://31.media.tumblr.com/tumblr_mbs9uw4Uoy1qaa50yo1_500.jpg",
      "http://28.media.tumblr.com/tumblr_lj0eomAZZ91qb08qmo1_500.jpg",
      "http://24.media.tumblr.com/tumblr_ljjmvou3oc1qfz5nco1_500.jpg",
      "http://25.media.tumblr.com/tumblr_lk7v8zCcIn1qaa50yo1_500.jpg",
    ];
  }

}
