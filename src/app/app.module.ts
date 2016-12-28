import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleHTTPcomponentComponent } from './simple-httpcomponent/simple-httpcomponent.component';
import { YoutubeSearchComponent } from './youtube-search/youtube-search.component';
import { Observable } from 'rxjs/Rx';
import { MouseService } from './service/mouse.service';


@NgModule({
  declarations: [
    AppComponent,
    SimpleHTTPcomponentComponent,
    YoutubeSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MouseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
