import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Http }     from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  films: Observable<any>;

  public posts: Object[] = []

  constructor(
      public http:    Http,
      public navCtrl: NavController,
  ) {

  }

  ngOnInit() {
    // this.initBuptBbsRss()

    this.films = this.http.get('https://api.douban.com/v2/movie/top250')
        .map(res => res.json())
  }

  openDetails(film) {
    this.navCtrl.push(DetailPage, {film: film});
  }

}
