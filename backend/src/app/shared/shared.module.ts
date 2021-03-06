import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MomentModule } from 'ngx-moment';
import { SpinnerComponent } from './spinner/spinner.component';
import { OwlDateTimeModule, OWL_DATE_TIME_FORMATS } from 'ng-pick-datetime';
import { OwlMomentDateTimeModule } from 'ng-pick-datetime-moment';
import { environment } from '../../environments/environment';

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const CUSTOM_DATETIME_FORMATS = environment.customDateTimeFormat;

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MomentModule,
    OwlDateTimeModule, OwlMomentDateTimeModule
  ],
  declarations: [
    SpinnerComponent,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MomentModule,
    SpinnerComponent,
    OwlDateTimeModule, OwlMomentDateTimeModule
  ],
  providers: [
    { provide: OWL_DATE_TIME_FORMATS, useValue: CUSTOM_DATETIME_FORMATS },
  ],
})
export class SharedModule {
}
