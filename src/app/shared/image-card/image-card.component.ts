import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.less']
})
export class ImageCardComponent implements OnInit {

  @Input()
  item: ImageCard;

  @Output()
  workerSelected = new EventEmitter<ImageCard>();

  constructor() { }

  ngOnInit(): void { }

  public onSelectWorker(item: ImageCard) {
    this.workerSelected.emit(item);
  }

}


export interface ImageCard {
  urlImg: string,
  title: string,
  desc?: string,
  id: string
}