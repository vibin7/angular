import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductListComponent} from './product-list.component';
import {StarComponent} from './star.component';
import { ProductFilterPipe } from './product-filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
