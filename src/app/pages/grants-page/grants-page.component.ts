import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-grants-page',
    templateUrl: './grants-page.component.html',
    styleUrls: ['./grants-page.component.scss'],
})
export class GrantsPageComponent implements OnInit {
    constructor(private titleService: Title) {}

    ngOnInit(): void {
        this.titleService.setTitle('Funded Grants | dYdX Grants');
    }
}
