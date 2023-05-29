import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-write-blog',
  templateUrl: './write-blog.component.html',
  styleUrls: ['./write-blog.component.css'],
})
export class WriteBlogComponent {
  fileName: string = '';
  url: any;
  msg: string = '';
  file: any;

  constructor(private http: HttpClient) {}


  selectFile(event: any) {
    this.file = event.target.files[0];
    if (!this.file) {
      this.msg = 'You must select an image';
      return;
    }

    const mimeType = this.file.type;

    if (mimeType.match(/image\/*/) == null) {
      this.msg = 'Only images are supported';
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(this.file);

    reader.onload = (event) => {
      this.msg = '';
      this.url = reader.result;
    };
  }

  post() {
    if (this.file) {
      this.fileName = this.file.name;
      console.log(this.fileName)
      const formData = new FormData();

      formData.append('file', this.file);


      const upload = this.http.post(`/api/blog/upload`, formData);
      upload.subscribe();
    }
  }
}
