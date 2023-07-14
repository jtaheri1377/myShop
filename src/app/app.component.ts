import { HttpService } from './services/http/http.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  location: boolean = false;
  title = 'myShop';

  onActivate(event: any) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.getAll("user_currentaddress").subscribe((res: any) => {
      var latlng = res[0];
      if (!latlng.lat)
        this.location = true;
    })
  }

  getHeight() {
    if (this.location) {
      return '100vh';
    }
    else {
      return '100%'
    }
  }

  getOverflow() {
    if (this.location) {
      return 'hidden';
    }
    else {
      return 'auto';
    }
  }

  onClose_LocationBox(result: any) {
    this.location = false;
    if (result)
      alert("آدرس انتخاب شد" + result);
  }

  showLocation() {
    this.location = true;
  }


}
