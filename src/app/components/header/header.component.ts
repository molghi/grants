import { Component, OnInit, HostListener } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss', './header-hamburger-menu.scss'],
})
export class HeaderComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

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
        link: '/apply',
    };

    socials: Array<any> = [
        { link: '#', image: 'assets/images/icons/twi.svg' },
        { link: '#', image: 'assets/images/icons/diss.svg' },
    ];

    isHamburgerMenuActive: boolean = false;

    toggleHamburgerMenu = () => (this.isHamburgerMenuActive = !this.isHamburgerMenuActive);

    // implement sticky header on scroll up
    // have a var for last position, listen to scroll, update the var, and compare to current position
    lastScrollPosition: number = 0;
    headerVisible: boolean = false; // for easier rendering

    @HostListener('window:scroll', [])
    onWindowScroll() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll < this.lastScrollPosition) {
            this.headerVisible = true; // scrolling up
            document.body.style.paddingTop = '120px'; // 120px = header height
            if (currentScroll === 0) {
                document.body.style.paddingTop = '0';
                this.headerVisible = false;
            }
        } else {
            document.body.style.paddingTop = '0';
            this.headerVisible = false; // scrolling down
        }

        this.lastScrollPosition = currentScroll;
    }
}
