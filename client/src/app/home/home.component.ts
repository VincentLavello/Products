import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'; //from video
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router ,
    private _httpService: HttpService 
    
    ) { }
   Pets;
    ngOnInit(){
      this.getPetsFromService();
    }
    getPetsFromService(){
        let observable = this._httpService.getPets();
       
        observable.subscribe(data => {
          this.Pets = data;
          console.log(data);
        // console.log("Did we really Get our Pets from components?????!", data);
        });
    }
  // goHome() {
  //   this._router.navigate(['/home']);
  // }

}
