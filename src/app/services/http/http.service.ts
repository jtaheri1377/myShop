import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = "http://localhost:3000/"
  constructor(private http: HttpClient) { }

  getAll(url: string) {
    return this.http.get(this.baseUrl + url);
  }

  update(url: string, id: string, item: any) {
    return this.http.put(this.baseUrl + url + "/" + id, item);
  }

  add(url: string, item: any) {
    return this.http.post(this.baseUrl + url, item);
  }

  delte(url: string, id: string) {
    return this.http.delete(this.baseUrl + url + "/" + id);
  }

  search(url: string, searchKeys: string[], searchValues: string[]) {
    var request = this.baseUrl + url + "?";
    for (let i = 0; i < searchKeys.length; i++) {
      request += searchKeys[i] + "=" + searchValues[i];
      if (i + 1 < searchKeys.length)
        request += "&";
    };

    return this.http.get(request);
  }

}
