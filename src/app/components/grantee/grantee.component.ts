import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-grantee',
    templateUrl: './grantee.component.html',
    styleUrls: ['./grantee.component.scss'],
})
export class GranteeComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    arrowImage: string = 'assets/images/icons/fi_arrow-right.svg';

    bigImage: string = 'assets/images/content/big-avatar.png';

    name: string = 'Jane Cooper';

    aboutTitle: string = 'About';
    linksTitle: string = 'Links';

    aboutText: string = `For athletes, high altitude produces two contradictory effects on performance. For explosive events (sprints up to 400 metres, long jump, triple jump) the reduction in atmospheric pressure means there is less resistance from the atmosphere and the athlete's performance will generally be better at high altitude.`;

    socials: Array<any> = [
        { link: 'https://twitter.com', icon: 'assets/images/icons/twi-2.svg', text: 'Twitter' },
        { link: 'https://linkedin.com', icon: 'assets/images/icons/in.svg', text: 'LinkedIn' },
        { link: 'https://github.com', icon: 'assets/images/icons/git.svg', text: 'GitHub' },
        { link: 'https://google.com', icon: 'assets/images/icons/site.svg', text: 'Website' },
    ];
}
