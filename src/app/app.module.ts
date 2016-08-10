import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import 'rxjs/Rx';
import {DataTable, Column} from 'primeng/primeng';


@NgModule({
    declarations: [
        AppComponent,
        DataTable,
        Column
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [],
})

export class AppModule{}
