import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'; // for scrolling to top

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    // for scrolling to top:
    constructor(private router: Router) {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                window.scrollTo({ top: 0 });
            }
        });
    }

    title = 'grants';
}
