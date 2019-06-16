import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', loadChildren: './inicio/inicio.module#InicioPageModule' },
  { path: 'action-sheet', loadChildren: './action-sheet/action-sheet.module#ActionSheetPageModule' },
  { path: 'alert', loadChildren: './alert/alert.module#AlertPageModule' },
  { path: 'avatar', loadChildren: './avatar/avatar.module#AvatarPageModule' },
  { path: 'card', loadChildren: './card/card.module#CardPageModule' },
  { path: 'button', loadChildren: './button/button.module#ButtonPageModule' },
  { path: 'datetime', loadChildren: './datetime/datetime.module#DatetimePageModule' },
  { path: 'fab', loadChildren: './fab/fab.module#FabPageModule' },
  { path: 'input', loadChildren: './input/input.module#InputPageModule' },
  { path: 'txtarea', loadChildren: './txtarea/txtarea.module#TxtareaPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'iscroll', loadChildren: './iscroll/iscroll.module#IscrollPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
