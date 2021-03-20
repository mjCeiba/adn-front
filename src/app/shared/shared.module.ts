import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TrackByPipe } from './pipe/track-by.pipe';
import { ImageCardComponent } from './image-card/image-card.component';

@NgModule({
  declarations: [
    TrackByPipe,
    ImageCardComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    TrackByPipe,
    ImageCardComponent
  ]
})
export class SharedModule { }
