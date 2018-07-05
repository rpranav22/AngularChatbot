import { Component } from '@angular/core';
import { SpinnerService } from './spinner.service';
@Component({
    selector: 'app-spinner-component',
    template: '<div class="my-loader" *ngIf="active"></div>'
})
export class SpinnerComponent {
    public active: boolean;

    public constructor(spinner: SpinnerService) {
        spinner.status.subscribe((status: boolean) => {
            this.active = status;
        });
    }
}

