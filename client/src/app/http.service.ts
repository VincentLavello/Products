import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { BehaviorSubject, observable } from 'rxjs';

//what is in video:
@Injectable({
     providedIn: 'root'
   })


  export class HttpService {
  
  
    constructor(private _http: HttpClient) {}
  
      getPets(){
        return this._http.get('/products');
      }
      
      
      LikePetByID(id) {
        console.log("SERVICE.LikePetByID()", id);

        return this._http.get('/products/like/' + id);
        // return this._http.get(`/pet/like/${id}`);
      }
      getPetById(id) {
        console.log(id);
        return this._http.get(`/products/${id}`);
        
      }
      getQtyById(id) {
        console.log(id);
        return this._http.get(`/products/qty/${id}`);
        
      }
      editPetById(id, data) {
        return this._http.put(`/products/edit/${id}`, data);
      }
      postPet(data) {
        return this._http.post(`/products/new`, data);
      }

      deletePet(id) {
        console.log("@@HERE TO PEEK A BOOO", id); //success so far
        return this._http.delete(`/products/delete/${id}`);
        // return this._http.delete("/pet/" + id);
      }
      checkForName(strName) {
        return this._http.get('/products/check/' + strName);

      }
      maxid() {
        return this._http.get('/products/maxid');

      }
}