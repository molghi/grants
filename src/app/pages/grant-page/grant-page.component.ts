import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

interface Item {
    category: string;
    name: string;
    amount: string;
    text: string;
    image: string;
}

@Component({
    selector: 'app-grant-page',
    templateUrl: './grant-page.component.html',
    styleUrls: ['./grant-page.component.scss'],
})
export class GrantPageComponent implements OnInit {
    constructor(private titleService: Title) {}

    ngOnInit(): void {
        this.titleService.setTitle('Grant Page | dYdX Grants');
    }

    link: { text: string; address: string } = {
        text: 'View all similar projects',
        address: '#',
    };

    items: Array<Item> = [
        {
            category: 'Marketing',
            name: 'Trading Strategy and Risk Tool',
            amount: '$5,000 - $6,000',
            text: 'They were used to create the machines that launched two waves of industrial revolution — the first one powered by steam and the secon ...',
            image: 'assets/images/content/avatars-10.png',
        },
        {
            category: 'Marketing',
            name: 'dydx.vote + Subgraph',
            amount: '$5,000 - $6,000',
            text: 'We know how large objects will act, but things on a small scale just do not act that way.',
            image: 'assets/images/content/avatars-11.png',
        },
    ];
}
