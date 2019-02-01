import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ArtistComponent } from './artist/artist.component';
import { ProfileComponent } from './artist/profile/profile.component';
import { GalleryComponent } from './artist/gallery/gallery.component';
import { GalleryDetailComponent } from './artist/gallery-detail/gallery-detail.component';
import { CreateComponent } from './artist/create/create.component';
import { UpdateComponent } from './artist/update/update.component';
import { DeleteComponent } from './artist/delete/delete.component';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'artist',
    component: ArtistComponent
    children: [
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'gallery',
        component: GalleryComponent
      },
      {
        path: 'gallerys/:id',
        component: GalleryDetailComponent //This is an image
      },
      {
        path: 'create',
        component: CreateComponent
      },
      {
        path: 'update',
        component: UpdateComponent
      },
      {
        path: 'delete',
        component: DeleteComponent
      },
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
