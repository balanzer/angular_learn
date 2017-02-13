import {
  Component, Input, Output, EventEmitter,
  OnChanges, DoCheck
} from '@angular/core';

import { Item } from '../item-data/item-types';

@Component({
  selector: 'default-strategy',
  moduleId: __moduleName,
  templateUrl: './default-strategy.html'
  // changeDetection: ChangeDetectionStrategy.Default
})
export class DefaultStrategyComponent implements OnChanges, DoCheck {
  @Input() items: Item[];
  @Output() toggleItem = new EventEmitter<number>();

  ngOnChanges() {
    console.log('Default Strategy - ngOnChanges');
  }

  ngDoCheck() {
    console.log('Default Strategy - ngDoCheck');
  }
}
