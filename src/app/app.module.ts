import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeComponent } from './pipe/pipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SerachPipe } from './search.pipe';
import { SortDirective } from './sort.directive';



@NgModule({
  declarations: [
    AppComponent,
    PipeComponent,
    SerachPipe,
    SortDirective
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
   
 
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
