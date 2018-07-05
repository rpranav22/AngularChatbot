import { Component } from '@angular/core';
import { ToasterConfig } from 'angular2-toaster';
import { Router, NavigationEnd } from '@angular/router';
import { ApiService } from './shared/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router,
    private api: ApiService) {
}

}
