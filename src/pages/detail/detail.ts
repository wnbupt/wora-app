import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http }     from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
/**
 * Generated class for the DetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  film: any
  filmDetail: Observable<any>

  public posts: Object[] = []

  constructor(
      public http:    Http,
      public navCtrl: NavController,
      public navParams: NavParams,
  ) {
  }

  ngOnInit() {
    this.film = this.navParams.get('film')
    console.log(this.navParams.get('film').id)
    var filmURL = 'https://api.douban.com/v2/movie/subject/' + this.navParams.get('film').id
    console.log(filmURL)
    this.filmDetail = this.http.get(filmURL)
        .map(res => res.json())
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
