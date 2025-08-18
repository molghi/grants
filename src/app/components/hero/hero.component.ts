import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    title: string = 'Powering the future of dYdX through community grants';

    buttons: Array<any> = [
        { title: 'Discover RFPs', link: '/discover' },
        { title: 'Apply for grant', link: '/apply' },
    ];

    tiles: Array<any> = [
        { title: '100+', text: 'projects funded' },
        { title: '$3+ million', text: 'awarded' },
        { title: '400+', text: 'projects delivered' },
    ];

    bottomElementPath: string = `assets/images/content/down-arrow.png`;
}
