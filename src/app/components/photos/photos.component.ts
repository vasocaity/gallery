import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photoForm: FormGroup;
  constructor(private fb: FormBuilder, private db: AngularFireDatabase) { }

  ngOnInit() {
    this.photoForm = this.fb.group({
      name: null,
      photoFile: null,
      desriction: null
    });
  }

  addPhoto() {
    this.db.list('/albums').push(this.photoForm.value);
   console.log(this.photoForm.value);
  }

}
