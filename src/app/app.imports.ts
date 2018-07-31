import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DEV_REDUCERS, syncReducers, AppState } from './reducers';
import { RouterEffects } from './effects/router';
import { UserEffects } from './user/user.effects';

export const metaReducers: MetaReducer<AppState>[] = ENV === 'development' ?
  [...DEV_REDUCERS] : [];

export const APP_IMPORTS = [
  BrowserAnimationsModule,
  EffectsModule.forRoot([
    RouterEffects,
    UserEffects
  ]),
  NgbModule.forRoot(),
  StoreModule.forRoot(syncReducers, { metaReducers }),
  StoreRouterConnectingModule.forRoot({
    stateKey: 'router' // name of reducer key
  }),
];
