import { Component, OnInit } from '@angular/core';

interface ListItem {
    title: string;
    link: string;
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
        link: '#',
        image: 'assets/images/icons/footer-logo.svg',
    };

    list: Array<ListItem> = [
        { title: 'About', link: '#' },
        { title: 'FAQ', link: '#' },
        { title: 'Brand assets', link: '#' },
        { title: 'dYdX Foundation', link: '#' },
        { title: 'dYdX Trading', link: '#' },
    ];

    socials: Array<SocialsItem> = [
        { image: 'assets/images/icons/twi.svg', link: '#' },
        { image: 'assets/images/icons/diss.svg', link: '#' },
    ];
}
