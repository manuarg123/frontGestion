import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-complete-payouts-widget',
  templateUrl: './complete-payouts-widget.component.html',
  styleUrls: ['./complete-payouts-widget.component.css']
})
export class CompletePayoutsWidgetComponent {
  @Input() completePayouts: any[] = [];
}
