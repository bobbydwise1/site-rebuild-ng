import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PictureComponent } from './picture/picture.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    GalleryComponent,
    PictureComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
