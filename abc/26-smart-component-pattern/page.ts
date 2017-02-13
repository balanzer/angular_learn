import { Component } from '@angular/core';

import { EmployeeLoader } from './employeeLoader';

@Component({
  selector: 'my-app',
  templateUrl: './page.html',
  providers: [EmployeeLoader]
})
export class PageComponent {
}
