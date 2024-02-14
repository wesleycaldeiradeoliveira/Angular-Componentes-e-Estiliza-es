import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { CardButtonComponent } from '../card-button/card-button.component';
import { CardRosaComponent } from '../card-rosa/card-rosa.component';
import { CardRosaButtonComponent } from '../card-rosa-button/card-rosa-button.component';

@NgModule({
  declarations: [
    CardComponent,
    CardButtonComponent,
    CardRosaComponent,
    CardRosaButtonComponent,
  ],
  imports: [
    CommonModule,
      ],
      exports:[
        CardComponent,
    CardButtonComponent,
    CardRosaComponent,
    CardRosaButtonComponent,
      ]
})
export class CardsModule { }
