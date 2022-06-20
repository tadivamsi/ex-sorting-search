import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {
 role:any;
 
  res: any;
text:any;
  constructor(private http:HttpClient ) { }
  

  ngOnInit(): void {
  this.Rolelist();
  }
  Rolelist(){
  this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((res:any)=>
  {
    this.role = res;
  console.log(this.role);
  })

  }
  
}
