import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { GalleryDetailComponent } from './gallery-detail/gallery-detail.component'
import { ArtistComponent } from './artist/artist.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'artist',
    component: ArtistComponent
  },
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
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
