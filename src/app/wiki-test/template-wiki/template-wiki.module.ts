import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderWikiComponent } from './header-wiki/header-wiki.component';
import { FooterWikiComponent } from './footer-wiki/footer-wiki.component';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { MenuWikiComponent } from './menu-wiki/menu-wiki.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
	declarations: [HeaderWikiComponent, FooterWikiComponent, MenuWikiComponent],
	imports: [CommonModule, IonicModule, SharedModule, TranslateModule],
	exports: [HeaderWikiComponent, FooterWikiComponent, MenuWikiComponent],
})
export class TemplateWikiModule {}
