import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { query } from '@angular/animations';

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

  getAlbumByName(name: string): Observable<any[]> {
    this.photoList = this.db.list('/albums', ref => ref.orderByChild('name').equalTo(name));
    return this.photoList.snapshotChanges().pipe(map(actions => {
      return actions.map(action => (
        { key: action.key, value: action.payload.val() }
      )
      );
    }));
  }

  getAlbumById(id: string): Observable<any> {
    return this.db.object('/albums/' + id).snapshotChanges().pipe(map(actions => {
      return actions.payload.val();
    }));
  }

  updateAlbum(id, data) {
    return this.db.list('/albums').update(id, data);
  }
  removeAlbum(id: string) {
    console.log(id);
    this.db.list('/albums').remove(id);
  }
  getPhoto(): Observable<any[]> {
    this.photoList = this.db.list('/photos');
    return this.photoList.snapshotChanges().pipe(map(actions => {
      return actions.map(action => (
        { key: action.key, value: action.payload.val() }
      ));
    }));
  }

}
