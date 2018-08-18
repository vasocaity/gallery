import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  albumForm: FormGroup;
  constructor(private fb: FormBuilder, private db: AngularFireDatabase) { }

  ngOnInit() {
    this.albumForm = this.fb.group({
      name: null,
      photoFile: null,
      desriction: null
    });
  }

  addAlbum() {
    this.db.list('/albums').push(this.albumForm.value);
   console.log(this.albumForm.value);
  }

}
