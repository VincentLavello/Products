import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'; //from video
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(
      private _httpService: HttpService,
      private _route: ActivatedRoute,
      private _router: Router,
    ) { 
    
  }
  Pets;
  errors = [];
  newPet: any =    {
    "name": "",
    "qty": "",
    "price": ""
}
maxID: any =    {
  "name": "",
  "qty": 0,
  "price": 0.00,
  "ProdID": 0
}
NextID;
  ngOnInit() {
    // const obs = this._httpService.maxid();
    // obs.subscribe((data: any) => {
      
      const obs = this._httpService.maxid();
      obs.subscribe(data => {
        this.maxID= data;
        this.NextID = this.maxID.ProdID++;
        console.log("MAX PROD ID:",this.maxID.ProdID);
        console.log("NEXT PROD ID:",this.NextID);

        }); 
  }
  goHome() {
    this._router.navigate(['/products']);
  }
  resetProduct() {
    this.newPet.name="";
    this.newPet.qty=0;
    this.newPet.price=0;
  }

  createPet() {

    const obs = this._httpService.postPet(this.newPet);
    obs.subscribe((data: any) => {
      
      if (data.type===true) {
        this.errors = data.errors;
        console.log("Error in createPet()", this.errors);
        // this.errors 
      } else {
        console.log("success - createPet()");
        this.newPet = {name: '', type: '', desc: ''};
        // this.goHome();
        this._router.navigate(['/products']);
      }
      // console.log(newlyCreatedPet);
    });
  }
}
