//import components
import { CardUserComponent } from './cards/card-user/card-user.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardLoadresComponent } from './loaders/card-loadres/card-loadres.component';
import { TitleH1Component } from './titles/title-h1/title-h1.component';

export const components: any[] = [
    CarouselComponent,
    CardLoadresComponent,
    CardUserComponent,
    TitleH1Component
];

// exports all components

export * from './titles/title-h1/title-h1.component';
export * from './carousel/carousel.component';
export * from './loaders/card-loadres/card-loadres.component';
export * from './cards/card-user/card-user.component';