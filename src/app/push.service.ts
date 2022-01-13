import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  constructor(private _http:HttpClient) { }

  sendMessage(message:string){
      // const formData = new FormData();
      const httpOptions = {
          headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'Authorization' : 'Bearer NGEyNDc0NDYtYjQ4OS00MzFhLWEzYjUtYzUzODNjNjU0YjRk'
          })
      };
      let sub = {
        "app_id": "54fcb0c1-30fe-4da5-b050-7af3b78891cc",
        "included_segments": ["Subscribed Users"],
        "data": {"foo": "bar"},
        "contents": {"en": message}
      }

      // formData.set('email' , loginForm.email)
      // formData.set('password' , loginForm.password)

      return this._http.post("https://onesignal.com/api/v1/notifications" , JSON.stringify(sub), httpOptions);


  }

}
