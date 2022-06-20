import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders} from '@angular/common/http';
const headersData={
  headers:new HttpHeaders({'Content-Type': 'application/json'}),
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url2:string=' http://saapi.azaz.com/api/Roles/GetRoles';



  constructor(public http:HttpClient) { }
 

    
  Rolelist(obj2:any)
  {
    return this.http.post(this.url2,JSON.stringify,headersData);

   
    
  }
  
 
     }

