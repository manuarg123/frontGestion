import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-next-consultations-widget',
  templateUrl: './next-consultations-widget.component.html',
  styleUrls: ['./next-consultations-widget.component.css']
})
export class NextConsultationsWidgetComponent {
  @Input() nextConsultations: any[] = [];
}
