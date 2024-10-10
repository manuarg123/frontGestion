import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-last-consultations-widget',
  templateUrl: './last-consultations-widget.component.html',
  styleUrls: ['./last-consultations-widget.component.css']
})
export class LastConsultationsWidgetComponent {
  @Input() lastConsultations: any[] = [];
}
