  import { Component } from '@angular/core';
  import { ApiService } from 'src/app/service/api.service';

  @Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
  })
  export class HomeComponent {
    nextConsultations: any[] = [];
    lastConsultations: any[] = [];
    pendingPayouts: any[] = [];
    completePayouts: any[] = [];
    nextConsultation: any[] = [];

    constructor(
      private apiService: ApiService
    ) {}

    ngOnInit() {
      this.getNextConsultations();
      this.getLastConsultations();
      this.getCompletePayouts();
      this.getPendingPayouts();
      this.getNextConsultation();
    }

    getNextConsultations() {
      const token = localStorage.getItem('token');

      if (token != null) {
        this.apiService
          .get('home/nextConsultations', token)
          .subscribe(
            (data) => {
              this.nextConsultations = data.data
            },
            (error) => {
              console.log(
                'Error al obtener los datos de los centros médicos:',
                error
              );
            }
          );
      } else {
        console.log('No se encontro token');
      }
    }

    getLastConsultations() {
      const token = localStorage.getItem('token');

      if (token != null) {
        this.apiService
          .get('home/lastConsultations', token)
          .subscribe(
            (data) => {
              this.lastConsultations = data.data
            },
            (error) => {
              console.log(
                'Error al obtener los datos de los centros médicos:',
                error
              );
            }
          );
      } else {
        console.log('No se encontro token');
      }
    }

    getPendingPayouts() {
      const token = localStorage.getItem('token');

      if (token != null) {
        this.apiService
          .get('home/pendingPayouts', token)
          .subscribe(
            (data) => {
              this.pendingPayouts = data.data
            },
            (error) => {
              console.log(
                'Error al obtener los datos de los centros médicos:',
                error
              );
            }
          );
      } else {
        console.log('No se encontro token');
      }
    }

    getCompletePayouts() {
      const token = localStorage.getItem('token');

      if (token != null) {
        this.apiService
          .get('home/completePayouts', token)
          .subscribe(
            (data) => {
              this.completePayouts = data.data
            },
            (error) => {
              console.log(
                'Error al obtener los datos de los centros médicos:',
                error
              );
            }
          );
      } else {
        console.log('No se encontro token');
      }
    }

    getNextConsultation() {
      const token = localStorage.getItem('token');

      if (token != null) {
        this.apiService
          .get('home/nextConsultation', token)
          .subscribe(
            (data) => {
              this.nextConsultation = [data.data]
            },
            (error) => {
              console.log(
                'Error al obtener los datos de los centros médicos:',
                error
              );
            }
          );
      } else {
        console.log('No se encontro token');
      }
    }

  }
