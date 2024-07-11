import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import{DropdownModule} from 'primeng/dropdown';
import{TableModule} from 'primeng/table';
import{DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputMaskModule} from 'primeng/inputmask';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutosAgroService } from './produtos-agro.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    TableModule,
    DialogModule,
    FormsModule,
    BrowserAnimationsModule,
    InputMaskModule,
    ButtonModule
  ],
  providers: [ProdutosAgroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
