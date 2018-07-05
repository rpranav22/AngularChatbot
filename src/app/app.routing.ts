import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppCustomPreloader } from './app-routing-loader';

const routes: Routes = [
    
  
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: AppCustomPreloader})],
    exports: [RouterModule],
    providers: [AppCustomPreloader]
})
export class AppRoutingModule {}
