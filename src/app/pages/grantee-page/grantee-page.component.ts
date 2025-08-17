import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-grantee-page',
    templateUrl: './grantee-page.component.html',
    styleUrls: ['./grantee-page.component.scss'],
})
export class GranteePageComponent implements OnInit {
    constructor(private titleService: Title) {}

    ngOnInit(): void {
        this.titleService.setTitle('Grantee Page | dYdX Grants');
    }

    items: Array<any> = [
        {
            category: 'Marketing',
            name: 'Trading Strategy and Risk Tool',
            amount: '$5,000 - $6,000',
            text: 'They were used to create the machines that launched two waves of industrial revolution — the first one powered by steam and the secon...',
            image: 'assets/images/content/avatars-10.png',
        },
        {
            category: 'Marketing',
            name: 'dydx.vote + Subgraph',
            amount: '$4,000 - $5,000',
            text: 'We know how large objects will act, but things on a small scale just do not act that way.',
            image: 'assets/images/content/avatars-11.png',
        },
    ];
}
