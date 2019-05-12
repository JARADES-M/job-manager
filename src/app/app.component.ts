import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  color = 'accent';
  disabled = false;

  ativos: Servico[] = [
    {
      name: 'Serviço A',
      updated: new Date('1/1/16'),
      checked: true
    },
    {
      name: 'Serviço B',
      updated: new Date('1/17/16'),
      checked: true
    },
    {
      name: 'Serviço X',
      updated: new Date('1/28/16'),
      checked: true
    }
  ];
  inativos: Servico[] = [
    {
      name: 'Serviço Y',
      updated: new Date('2/20/16'),
      checked: false
    },
    {
      name: 'Serviço Z',
      updated: new Date('1/18/16'),
      checked: false
    }
  ];
}

export interface Servico {
  name: string;
  updated: Date;
  checked: boolean
}