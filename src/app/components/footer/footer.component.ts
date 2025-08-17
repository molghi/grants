import { Component, OnInit } from '@angular/core';

interface ListItem {
    title: string;
    link: string;
    isExternal: boolean;
}

interface SocialsItem {
    image: string;
    link: string;
}

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    logo: { [key: string]: string } = {
        link: '/',
        image: 'assets/images/icons/footer-logo.svg',
    };

    list: Array<ListItem> = [
        { title: 'About', link: '#', isExternal: false },
        { title: 'FAQ', link: '/faq', isExternal: false },
        { title: 'Brand assets', link: '#', isExternal: false },
        { title: 'dYdX Foundation', link: '#', isExternal: true },
        { title: 'dYdX Trading', link: '#', isExternal: true },
    ];

    socials: Array<SocialsItem> = [
        { image: 'assets/images/icons/twi.svg', link: 'https://twitter.com' },
        { image: 'assets/images/icons/diss.svg', link: 'https://discord.com' },
    ];
}
