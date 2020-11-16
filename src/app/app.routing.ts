import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {DetallesComponent} from './components/detalles/detalles.component';


const appRoutes: Routes=[
    {path:"detalles/:id/:nombre/:price/:category/:img", component:DetallesComponent},
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);
