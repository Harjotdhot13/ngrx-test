import { NgModule } from '@angular/core';
import { AppComponent } from '@app/app.component';
import { CoreModule } from '@core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { appReducers } from '@app/store/reducers/product.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from '@app/store/effects/product.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CoreModule,
        BrowserModule,
        StoreModule.forRoot(
            appReducers
        ),
        StoreDevtoolsModule.instrument({
            maxAge: 10, // Retains last 10 states
        }),
        EffectsModule.forRoot([ProductEffects])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
