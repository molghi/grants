import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-discover-page',
    templateUrl: './discover-page.component.html',
    styleUrls: ['./discover.component.scss'],
})
export class DiscoverPageComponent implements OnInit {
    constructor(private titleService: Title) {}

    ngOnInit(): void {
        this.titleService.setTitle('Discover Initiatives | dYdX Grants');
    }
}
