import {
  Component, ChangeDetectionStrategy, Input,
  EventEmitter, Output, OnChanges, DoCheck
} from '@angular/core';

import { Item } from '../item-data/item-types';

@Component({
  selector: 'onpush-strategy',
  moduleId: __moduleName,
  templateUrl: './onpush-strategy.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushStrategyComponent implements OnChanges, DoCheck {
  @Input() items: Item[];
  @Output() toggleItem = new EventEmitter<number>();

  ngOnChanges() {
    console.log('OnPush Strategy - ngOnChanges');
  }

  ngDoCheck() {
    console.log('OnPush Strategy - ngDoCheck');
  }
}
