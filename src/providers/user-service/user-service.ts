import { HttpClient } from '@angular/common/http';
// import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UserServiceProvider Provider');
  }

  apiUrl = 'http://192.168.0.240:60081/AD';

  //service test
  // getUsers() {
  // if (this.data) {
  //   return Promise.resolve(this.data);
  // }
  // return new Promise(resolve => {
  //     this.http.get('https://jsonplaceholder.typicode.com/users')
  //       .map(res => res)
  //       .subscribe(data => {
  //         this.data = data;
  //         resolve(this.data);
  //       });
  //   });
// }


// login(data) {
//   return new Promise((resolve, reject) => {
//     this.http.post(this.apiUrl+'/Login', JSON.stringify(data))
//       .subscribe(res => {
//         resolve(res);
//       }, (err) => {
//         reject(err);
//       });
//   });
// }

// updatePassword(data) {
//   return new Promise((resolve, reject) => {
//     this.http.post(this.apiUrl+'/AtualizarSenha', JSON.stringify(data))
//       .subscribe(res => {
//         resolve(res);
//       }, (err) => {
//         reject(err);
//       });
//   });
// }
//
// unlock(data) {
//   return new Promise((resolve, reject) => {
//     this.http.post(this.apiUrl+'/Desbloquear', JSON.stringify(data))
//       .subscribe(res => {
//         resolve(res);
//       }, (err) => {
//         reject(err);
//       });
//   });
// }
//
// reset(data) {
//   return new Promise((resolve, reject) => {
//     this.http.post(this.apiUrl+'/Resetar', JSON.stringify(data))
//       .subscribe(res => {
//         resolve(res);
//       }, (err) => {
//         reject(err);
//       });
//   });
// }
//
// validateCode(data) {
//   return new Promise((resolve, reject) => {
//     this.http.post(this.apiUrl+'/ValidarCodigo', JSON.stringify(data))
//       .subscribe(res => {
//         resolve(res);
//       }, (err) => {
//         reject(err);
//       });
//   });
// }


}
