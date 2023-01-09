import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CardComponent } from './components/card/card.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';

@NgModule({
  declarations: [CardComponent, MenuBarComponent, SideBarComponent],
  imports: [CommonModule, RouterModule, PrimeNgModule],
  exports: [CardComponent, MenuBarComponent, SideBarComponent],
})
export class SharedComponentsModule {}
