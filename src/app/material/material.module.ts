import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from "@angular/material";
import {MatIconModule} from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { NgxPaginationModule } from 'ngx-pagination';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';


@NgModule({
    imports: [
      CommonModule,
      MatDialogModule,
      MatIconModule,
      MatCardModule,
      NgxPaginationModule,
      MatAutocompleteModule,
      MatFormFieldModule,
      MatInputModule
      //Ng2SearchPipeModule,
      // MatTableModule,
      // MatPaginatorModule,
      // MatSortModule
    ],
    exports: [
      CommonModule,
      MatDialogModule,
      MatIconModule,
      MatCardModule,
      NgxPaginationModule,
      MatAutocompleteModule,
      MatFormFieldModule,
      MatInputModule
      //Ng2SearchPipeModule,
      // MatTableModule,
      // MatPaginatorModule,
      // MatSortModule
    ]
})

export class MaterialModule {}