import { Component, OnInit } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import { AlbumsServiceService } from '../../services/albums-service.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  photoList: AngularFireList<any>;
  photo: any[];
  constructor(db: AngularFireDatabase, private service: AlbumsServiceService) {
    this.photoList = db.list('albums');
  }
  ngOnInit() {
    this.service.getPhoto().subscribe(items => {
      this.photo = items;
    });
  }
}
