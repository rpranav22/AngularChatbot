import {NgModule} from '@angular/core';
import 'hammerjs';
import {
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatRadioModule,
    MatChipsModule,
    MatIconModule
} from '@angular/material';

@NgModule({
    imports: [
        MatTabsModule,
        MatInputModule,
        MatSelectModule,
        MatMenuModule,
        MatSlideToggleModule,
        MatButtonModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatAutocompleteModule,
        MatDialogModule,
        MatRadioModule,
        MatChipsModule,
        MatIconModule
    ],
    exports: [
        MatTabsModule,
        MatInputModule,
        MatSelectModule,
        MatMenuModule,
        MatSlideToggleModule,
        MatButtonModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatAutocompleteModule,
        MatDialogModule,
        MatRadioModule,
        MatChipsModule,
        MatIconModule
    ]
})
export class MaterialModule {
    constructor() {}
}
