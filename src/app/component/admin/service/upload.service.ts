import { Injectable } from '@angular/core';
import * as  firebase from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable()

export class UploadService {

  constructor(private db: AngularFireDatabase) { }

  private uploadTask: firebase.storage.UploadTask;
  items: Observable<any[]>;

  pushUpload(upload: any) {
    let fileName = 'uploads/' + new Date().getTime() + upload.file.name;
    let storageRef = firebase.storage().ref(fileName);
    let uploadTask = storageRef.put(upload.file);//firebase.storage.TaskEvent.STATE_CHANGED
    uploadTask.on('state_changed', function (snapshot) {
      upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
      upload.name = fileName;
    },
      function (error) {
        console.log("error");
      },
      function () {
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          upload.url = downloadURL;
        });
      });
    return upload.url;
  }
  //  getFiles(){
  //   this.items = this.db.list('files').snapshotChanges();
  //   return this.items;
  //  }
  //  submitFileUrl(upload : any){
  //   return this.db.list('files').push({
  //      url:upload.url,
  //      name:upload.name
  //  })
  // }

  deleteUpload(upload: any) {
    this.deleteFileData(upload.$key).then(() => {
      this.deleteFileStorage(upload.name);
    }).catch(error => console.log(error))
  }

  deleteFileData(key: string) {
    return this.db.list('files').remove(key);
  }
  deleteFileStorage(name: string) {
    let storageRef = firebase.storage().ref();
    storageRef.child(name).delete();
  }

}
