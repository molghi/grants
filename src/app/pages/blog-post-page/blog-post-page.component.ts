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
    selector: 'app-blog-post-page',
    templateUrl: './blog-post-page.component.html',
    styleUrls: ['./blog-post-page.component.scss'],
})
export class BlogPostPageComponent implements OnInit {
    constructor(private titleService: Title) {}

    ngOnInit(): void {
        this.titleService.setTitle('Blog Post | dYdX Grants');
    }

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
        {
            category: 'Marketing',
            name: 'Trading Strategy and Risk Tool',
            amount: '$5,000 - $6,000',
            text: 'They were used to create the machines that launched two waves of industrial revolution — the first one powered by steam and the secon ...',
            image: 'assets/images/content/avatars-12.png',
        },
        {
            category: 'Marketing',
            name: 'dydx.vote + Subgraph',
            amount: '$5,000 - $6,000',
            text: 'We know how large objects will act, but things on a small scale just do not act that way.',
            image: 'assets/images/content/avatars-10.png',
        },
    ];
}
