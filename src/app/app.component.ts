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
      ativo: true
    },
    {
      name: 'Serviço B',
      updated: new Date('1/17/16'),
      checked: true,
      ativo: true
    },
    {
      name: 'Serviço X',
      updated: new Date('1/28/16'),
      checked: true,
      ativo: true
    },
    {
      name: 'Serviço Y',
      updated: new Date('2/20/16'),
      checked: false,
      ativo: false
    },
    {
      name: 'Serviço Z',
      updated: new Date('1/18/16'),
      checked: false,
      ativo: false
    }
  ];

  ativarTodos() {
    this.servicos.forEach(s => s.checked = true);
  }
  desativarTodos() {
    this.servicos.forEach(s => s.checked = false);
  }

}

export interface Servico {
  name: string;
  updated: Date;
  checked: boolean;
  ativo: boolean;
}