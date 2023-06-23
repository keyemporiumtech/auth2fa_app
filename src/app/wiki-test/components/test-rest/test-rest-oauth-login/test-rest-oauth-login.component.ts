import { Component, OnDestroy, OnInit } from '@angular/core';
import { SocialLoginService, EnumOauthLoginType } from '@ddc/rest';
import { Subscription } from 'rxjs';
import { SocialUser } from '@ddc/oauth-social';

@Component({
	selector: 'wiki-test-rest-oauth-login',
	templateUrl: './test-rest-oauth-login.component.html',
	styleUrls: ['./test-rest-oauth-login.component.scss'],
})
export class TestRestOauthLoginComponent implements OnInit, OnDestroy {
	isReady: boolean;
	socialUser: SocialUser;
	isLoggedin: boolean;
	// sub
	subAuthInit: Subscription;
	subAuthState: Subscription;

	constructor(private oauthService: SocialLoginService) {}

	ngOnInit() {
		this.subAuthInit = this.oauthService.oauthInit().subscribe((res) => {
			this.isReady = res;
		});
		this.subAuthState = this.oauthService.oauthUser().subscribe((user) => {
			this.socialUser = user;
			this.isLoggedin = user != null;
			console.error('User', this.socialUser);
		});
	}

	ngOnDestroy() {
		if (this.subAuthState) {
			this.subAuthState.unsubscribe();
		}
	}

	signInGoogle() {
		this.oauthService.signIn(EnumOauthLoginType.GOOGLE);
	}

	signInFacebook() {
		this.oauthService.signIn(EnumOauthLoginType.FACEBOOK);
	}

	signOut() {
		this.oauthService.signOut();
	}
}
