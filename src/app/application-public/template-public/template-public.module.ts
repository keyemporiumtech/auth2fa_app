import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../shared/shared.module';
import { FooterPublicComponent } from './footer-public/footer-public.component';
import { HeaderPublicComponent } from './header-public/header-public.component';
import { MenuPublicComponent } from './menu-public/menu-public.component';

@NgModule({
	imports: [IonicModule, CommonModule, SharedModule, TranslateModule],
	declarations: [HeaderPublicComponent, FooterPublicComponent, MenuPublicComponent],
	exports: [HeaderPublicComponent, FooterPublicComponent, MenuPublicComponent],
})
export class TemplatePublicModule {}
