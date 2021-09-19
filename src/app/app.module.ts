import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from './approuting.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { ProductComponent } from './product/product.component';


import { AppHttpInterceptorService } from './app-http-interceptor.service';
import { ProductService } from "./product.service";


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, AppRoutingModule  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    ContactComponent,
    ErrorComponent,
    ProductComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptorService,
      multi: true
    },
    {
      provide: ProductService,
      useClass: ProductService
    }

  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
