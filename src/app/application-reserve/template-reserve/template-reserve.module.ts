import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../shared/shared.module';
import { HeaderReserveComponent } from './header-reserve/header-reserve.component';
import { FooterReserveComponent } from './footer-reserve/footer-reserve.component';

@NgModule({
	imports: [IonicModule, CommonModule, SharedModule],
	declarations: [HeaderReserveComponent, FooterReserveComponent],
	exports: [HeaderReserveComponent, FooterReserveComponent],
})
export class TemplateReserveModule {}
