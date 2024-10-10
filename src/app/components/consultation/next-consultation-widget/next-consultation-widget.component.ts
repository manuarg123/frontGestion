import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-next-consultation-widget',
  templateUrl: './next-consultation-widget.component.html',
  styleUrls: ['./next-consultation-widget.component.css']
})
export class NextConsultationWidgetComponent implements OnChanges {
  @Input() nextConsultation: any[] = [];
  remainingTime: string = '';

  // Hook que se ejecuta cuando hay cambios en los inputs
  ngOnChanges(changes: SimpleChanges) {
    this.calculateRemainingTime();
  }

  calculateRemainingTime() {
    if (this.nextConsultation.length > 0) {
      const consultationDate = new Date(this.nextConsultation[0].date);
      const now = new Date();

      const timeDiff = consultationDate.getTime() - now.getTime();
      
      if (timeDiff > 0) {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.remainingTime = `${days} días y ${hours} horas`;
      } else {
        this.remainingTime = 'La consulta ya ha pasado';
      }
    } else {
      this.remainingTime = '';
    }
  }
}