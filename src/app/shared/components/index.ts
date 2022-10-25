//import components
import { SolidButtonComponent } from './buttons/solid-button/solid-button.component';
import { CardUserComponent } from './cards/card-user/card-user.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ColComponent } from './columns/col/col.component';
import { RowComponent } from './columns/row/row.component';
import { CardLoadresComponent } from './loaders/card-loadres/card-loadres.component';
import { FtTbodyComponent } from './tables/full-table/ft-tbody/ft-tbody.component';
import { FtTfootComponent } from './tables/full-table/ft-tfoot/ft-tfoot.component';
import { FtTheadComponent } from './tables/full-table/ft-thead/ft-thead.component';
import { FullTableComponent } from './tables/full-table/full-table.component';
import { TitleH1Component } from './titles/title-h1/title-h1.component';

export const components: any[] = [
    CarouselComponent,
    CardLoadresComponent,
    CardUserComponent,
    TitleH1Component,
    SolidButtonComponent,
    FullTableComponent,
    FtTheadComponent,
    FtTbodyComponent,
    FtTfootComponent,
    RowComponent,
    ColComponent
];

// exports all components

export * from './titles/title-h1/title-h1.component';
export * from './carousel/carousel.component';
export * from './loaders/card-loadres/card-loadres.component';
export * from './cards/card-user/card-user.component';
export * from './buttons/solid-button/solid-button.component';
export * from './tables/full-table/ft-tbody/ft-tbody.component';
export * from './tables/full-table/ft-tfoot/ft-tfoot.component';
export * from './tables/full-table/ft-thead/ft-thead.component';
export * from './tables/full-table/full-table.component';
export * from './columns/row/row.component';
export * from './columns/row/row.component';