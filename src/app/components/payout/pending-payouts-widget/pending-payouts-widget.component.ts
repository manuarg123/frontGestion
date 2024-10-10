import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pending-payouts-widget',
  templateUrl: './pending-payouts-widget.component.html',
  styleUrls: ['./pending-payouts-widget.component.css']
})
export class PendingPayoutsWidgetComponent {
  @Input() pendingPayouts: any[] = [];
}
