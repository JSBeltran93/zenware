import { Component } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent {
  items: MenuItem[] = [];
  constructor() {
    this.items = [
      {
        label: 'Guidelines',
        icon: PrimeIcons.BOOK,
        disabled: true,
      },
      {
        label: 'Status',
        icon: PrimeIcons.CHART_LINE,
        disabled: true,
      },
      {
        label: 'Employees',
        icon: PrimeIcons.FOLDER,
        routerLink: '/list-employee',
      },
      {
        label: 'User info',
        icon: PrimeIcons.USER,
        disabled: true,
      },
      {
        label: 'Chat',
        icon: PrimeIcons.COMMENTS,
        disabled: true,
      },
    ];
  }
}
