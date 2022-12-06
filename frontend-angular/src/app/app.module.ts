import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivroEffect } from './livros/store/livro.effect';
import { appReducer } from './shared/store/app.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({
      name: 'DevTools & Debugging in NgRx',
      maxAge: 25, // Retains last 25 states,
      trace: true,
    }),
    StoreModule.forRoot({ appState: appReducer }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [LivroEffect],
  bootstrap: [AppComponent],
})
export class AppModule {}
