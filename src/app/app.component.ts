import { Component } from '@angular/core';
import { inspectNativeElement } from '@angular/platform-browser/src/dom/debug/ng_probe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  color = 'accent';
  disabled = false;

  servicos: Servico[] = [
    {
      name: 'Serviço A',
      updated: new Date('1/1/16'),
      checked: true,
    },
    {
      name: 'Serviço B',
      updated: new Date('1/17/16'),
      checked: true,
    },
    {
      name: 'Serviço X',
      updated: new Date('1/28/16'),
      checked: true,
    },
    {
      name: 'Serviço Y',
      updated: new Date('2/20/16'),
      checked: false,
    },
    {
      name: 'Serviço Z',
      updated: new Date('1/18/16'),
      checked: false,
    }
  ];

  ativarTodos() {
    this.servicos.map(s => {s.checked = true, s.updated = new Date()});
  }
  desativarTodos() {
    this.servicos.map(s => {s.checked = false, s.updated = new Date()});
  }
  alterarStatus(servico: Servico){
    this.servicos.filter(s => s.name == servico.name).map(s => {
      s.checked = !servico.checked; s.updated = new Date()
    });
  }

}

export interface Servico {
  name: string;
  updated: Date;
  checked: boolean;
}