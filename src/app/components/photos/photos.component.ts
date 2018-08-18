import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AlbumsServiceService } from '../../services/albums-service.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photoForm: FormGroup;
  constructor(private fb: FormBuilder, private service: AlbumsServiceService) { }

  ngOnInit() {
    this.photoForm = this.fb.group({
      photoFile: [],
      desriction: null
    });
  }

  addPhoto() {
    this.service.addPhoto(this.photoForm.value);
   console.log(this.photoForm.get('photoFile').value);
  }

}
