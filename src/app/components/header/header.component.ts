import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss', './header-hamburger-menu.scss'],
})
export class HeaderComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    // data:

    logo: { [key: string]: string } = {
        image: 'assets/images/icons/logo.svg',
        link: '/',
    };

    navMenu: Array<any> = [
        { title: 'Discover initiatives', link: '/discover' },
        { title: 'Funded grants', link: '/grants' },
        { title: 'Program expenses', link: '/programs' },
        { title: 'Blog', link: '/blog' },
        { title: 'FAQ', link: '/faq' },
    ];

    button: { [key: string]: string } = {
        title: 'Apply <span>for grant</span>',
        link: '#',
    };

    socials: Array<any> = [
        { link: '#', image: 'assets/images/icons/twi.svg' },
        { link: '#', image: 'assets/images/icons/diss.svg' },
    ];

    isHamburgerMenuActive: boolean = false;

    toggleHamburgerMenu = () => (this.isHamburgerMenuActive = !this.isHamburgerMenuActive);
}
