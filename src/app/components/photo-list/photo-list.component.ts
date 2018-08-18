import { Component, OnInit } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  photoList: AngularFireList<any>;
  photo: any[];
  constructor(db: AngularFireDatabase) {
    this.photoList = db.list('albums');
  }
  ngOnInit() {
    this.photoList.snapshotChanges().pipe(map(actions => {
      return actions.map(action => (
        { key: action.key, value: action.payload.val() }
      )
      );
    })).subscribe(items => {
      this.photo = items;
    });
  }
}
