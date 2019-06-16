import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  components: Componente[] = [
    {
      nombre: 'Alert',
      icono: 'alert',
      url: '/alert'
    },
    {
      nombre: 'Action Sheet',
      icono: 'list-box',
      url: '/action-sheet'
    },
    {
      nombre: 'Avatar',
      icono: 'person',
      url: '/avatar'
    },
    {
      nombre: 'Card',
      icono: 'albums',
      url: '/card'
    },
    {
      nombre: 'Button',
      icono: 'finger-print',
      url: '/button'
    },
    {
      nombre: 'Datetime',
      icono: 'calendar',
      url: '/datetime'
    },
    {
      nombre: 'FAB',
      icono: 'add-circle',
      url: '/fab'
    },
    {
      nombre: 'Input',
      icono: 'code-working',
      url: '/input'
    },
    {
      nombre: 'TXTArea',
      icono: 'list-box',
      url: '/txtarea'
    },
    {
      nombre: 'Menu',
      icono: 'menu',
      url: '/menu'
    },
    {
      nombre: 'IScroll',
      icono: 'open',
      url: '/iscroll'
    }
  ];
  constructor() { }

  ngOnInit() {
  }



}

interface Componente {
  nombre: string;
  icono: string;
  url: string;
}
