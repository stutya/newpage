import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * GalleryApi is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class GalleryApi {
  url: string = 'http://www.mocky.io/v2/5daffe6d2f00001172c1374b';

  constructor(public http: HttpClient) {
  }

  get(params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params = reqOpts.params.set(k, params[k]);
      }
    }

    return this.http.get(this.url + '/', reqOpts);
  }
}
