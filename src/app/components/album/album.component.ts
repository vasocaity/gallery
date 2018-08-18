import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { AlbumsServiceService } from '../../services/albums-service.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  albums: any[];
  albumForm: FormGroup;
  constructor(private fb: FormBuilder, private db: AngularFireDatabase, private service: AlbumsServiceService) { }

  ngOnInit() {
    this.albumForm = this.fb.group({
      name: null,
      photoFile: null,
      desriction: null
    });
    this.getAlbum();
  }

  addAlbum() {
    this.db.list('/albums').push(this.albumForm.value);
   console.log(this.albumForm.value);
  }

  getAlbum() {
    this.service.getAlbumByName('untitled').subscribe(
      (item) => {
        this.albums = item;
        console.log(item);
      }
    );
    this.service.getAlbumById('-LKAmobb1Lz-uO8DUTbS').subscribe(
      (res) => console.log(res)
    );
  }

}
