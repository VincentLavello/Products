import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'; //from video
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  constructor(
      private _httpService: HttpService,
      private _route: ActivatedRoute,
      private _router: Router
    ){}
    qtyZero=false;
    flgClicked=false;
  viewThisPet: any = { name: '', qty:'', price: ''};

  // ngOnInit will run when the component is initialized, after the constructor method.
  ngOnInit(){
    // this.getPetsFromService();

    // qtyZero = 
    
    this._route.params.subscribe((params: Params) => {
      console.log("#### VIEW ####", params['id']);
      this.ViewPet(params['id']);
    });
  }
  goHome() {
    this._router.navigate(['/products']);
  }
LikePet(id) {
     console.log("Likes: ", id);
     if (!this.flgClicked) {
      const obs = this._httpService.LikePetByID(id);
      obs.subscribe(data => {
        this.viewThisPet= data;
        console.log(data);
        this.flgClicked=true;
        }); 
      }
}
  ViewPet(id){
    // console.log(id);
    // const qty = this._httpService.getQtyById(id);
    //   qty.subscribe(qtydata => {
    //     console.log("####QTY:###", qtydata);
    //   });
  
    const obs = this._httpService.getPetById(id);
    obs.subscribe(data => {
      // console.log(data);
      this.viewThisPet = data;
      this.qtyZero=(this.viewThisPet.qty == 0);
      console.log(this.qtyZero);
      // console.log("view PET: ", this.viewThisPet);
    });
  }
  DeletePet(id): void {
    console.log("home.deletepet", id);
    const obs = this._httpService.deletePet(id);
    obs.subscribe();
    // console.log(id); //successful to here
    this.goHome();
    // obs.subscribe();
  }
}  