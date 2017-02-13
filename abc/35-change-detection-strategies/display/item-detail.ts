import {
  Component, ChangeDetectionStrategy, Input, Output,
  EventEmitter, OnChanges, DoCheck
} from '@angular/core';

import { Item } from '../item-data/item-types';

@Component({
  selector: 'item-detail',
  moduleId: __moduleName,
  templateUrl: './item-detail.html',
  changeDetection: ChangeDetectionStrategy.Default
})
export class ItemDetailComponent implements OnChanges, DoCheck {
  @Input() item: Item;
  @Output() toggle = new EventEmitter<void>();

  ngOnChanges() {
    console.log('ItemDetail - ngOnChanges');
  }

  ngDoCheck() {
    console.log('ItemDetail - ngDoCheck');
  }
}
