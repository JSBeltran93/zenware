import { Component } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  items: MenuItem[];
  constructor() {
    this.items = [
      {
        label: 'Settings',
        icon: PrimeIcons.CALCULATOR,
      },
      {
        label: 'General',

        icon: PrimeIcons.PENCIL,
        items: [
          {
            label: 'Delete',
            icon: PrimeIcons.TRASH,
          },
          {
            label: 'Refresh',
            icon: PrimeIcons.REFRESH,
          },
        ],
      },
      {
        label: 'Info',
        icon: PrimeIcons.ALIGN_CENTER,
      },
    ];
  }
}
