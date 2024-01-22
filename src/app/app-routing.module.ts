import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GisMapComponent } from './gis-map/gis-map.component';
import { ServiceBlockRegistrationComponent } from './service-block-registration/service-block-registration.component';
import { LookupComponent } from './lookup/lookup.component';

const routes: Routes = [ {path: "**", component: LookupComponent},
{path:'arada/setting', component: GisMapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
