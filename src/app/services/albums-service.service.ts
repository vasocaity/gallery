import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsServiceService {

  photoList: AngularFireList<any>;
  photo: any[];

  constructor(private db: AngularFireDatabase) {
  }

  addAlbum(data: any) {
    this.db.list('/albums').push(data);
  }

  addPhoto(data: any) {
    this.db.list('/photos').push(data);
  }

  getAlbums(): Observable<any[]> {
    this.photoList = this.db.list('albums');
    return this.photoList.snapshotChanges().pipe(map(actions => {
      return actions.map(action => (
        { key: action.key, value: action.payload.val() }
      )
      );
    }));
  }
}
