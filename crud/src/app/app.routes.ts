import { Routes } from '@angular/router';

import { IndexComponent } from './pessoas/index/index.component';
import { ViewComponent } from './pessoas/view/view.component';
import { CreateComponent } from './pessoas/create/create.component';
import { EditComponent } from './pessoas/edit/edit.component';

export const routes: Routes = [
	{ path: '', redirectTo: 'pessoas/index', pathMatch: 'full'},
  	{ path: 'pessoas/index', component: IndexComponent },
  	{ path: 'pessoas/:postId/view', component: ViewComponent },
  	{ path: 'pessoas/create', component: CreateComponent },
  	{ path: 'pessoas/:postId/edit', component: EditComponent } 
  ];
