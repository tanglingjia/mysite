import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LingjiaComponent } from './lingjia/lingjia.component';
import { UtilitiesComponent } from './utilities/utilities.component';
import { TimestampComponent } from './utilities/timestamp/timestamp.component';
import { CompareComponent } from './utilities/compare/compare.component';
import { GamesComponent } from './games/games.component';

const routes: Routes = [
  { path: '', redirectTo: 'lingjia', pathMatch: 'full' },
  { path: 'lingjia', component: LingjiaComponent },
  {
    path: 'utilities',
    component: UtilitiesComponent,
    children: [
      { path: 'timestamp', component: TimestampComponent},
      { path: 'compare', component: CompareComponent}
    ]
  },
  { path: 'games', component: GamesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
