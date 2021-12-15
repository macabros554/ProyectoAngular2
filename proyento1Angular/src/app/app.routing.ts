import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ServersComponent } from './servers/servers/servers.component';
import { UsersComponent } from './users/users/users.component';

const routes: Routes = [
  {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
  },
  {
      path: 'servers',
      component: ServersComponent
  },
  {
      path: 'users',
      component: UsersComponent
  },
  {
      path: '**',
      component: NotFoundComponent
  }
];


@NgModule({
  imports: [
      RouterModule.forRoot( routes )
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule {}
