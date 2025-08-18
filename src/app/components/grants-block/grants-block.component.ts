import { Component, OnInit } from '@angular/core';

interface Item {
    category: string;
    name: string;
    amount: string;
    text: string;
    image: string;
    index: number;
    link: string;
}

@Component({
    selector: 'app-grants-block',
    templateUrl: './grants-block.component.html',
    styleUrls: ['./grants-block.component.scss'],
})
export class GrantsBlockComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    triggers: Array<any> = [
        { title: 'All' },
        { title: 'Technical / Tool Development' },
        { title: 'Governance' },
        { title: 'Growth / Marketing' },
        { title: 'Analytics' },
        { title: 'Third Party Provider' },
    ];

    items: Array<Item> = [
        {
            category: 'Marketing',
            name: 'Hedgie banner',
            amount: '$5,000 - $6,000',
            text: 'They can be used to deliver spacecraft to the ends of the solar system with hyper-pinpoint accuracy.',
            image: 'assets/images/content/avatars-10.png',
            index: 3,
            link: '/grant',
        },
        {
            category: 'Analytics',
            name: 'Hedgie educational content',
            amount: '$5,000 - $6,000',
            text: 'They are mathematically consistent in the sense that no one rule would ever violate another.',
            image: 'assets/images/content/avatars-11.png',
            index: 4,
            link: '/grant',
        },
        {
            category: 'Third Party Provider',
            name: 'Hedgie educational content',
            amount: '$5,000 - $6,000',
            text: 'This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then ...',
            image: 'assets/images/content/avatars-12.png',
            index: 5,
            link: '/grant',
        },
        {
            category: 'Third Party Provider',
            name: 'Japanese content website',
            amount: '$5,000 - $6,000',
            text: 'Historically, the electron, for example, was thought to behave like a particle, and then it was found that in many respects it behaved like a ...',
            image: 'assets/images/content/avatars-12.png',
            index: 5,
            link: '/grant',
        },
        {
            category: 'Governance',
            name: 'DGP referral program',
            amount: '$5,000 - $6,000',
            text: 'They finally obtained a consistent description of the behavior of matter on a small scale.',
            image: 'assets/images/content/avatars-10.png',
            index: 2,
            link: '/grant',
        },
        {
            category: 'Governance',
            name: 'ETHGlobal event sponsorship',
            amount: '$5,000 - $6,000',
            text: 'Because atomic behavior is so unlike ordinary experience, it is very difficult to get used to, and it appears peculiar and mysterious to everyon ...',
            image: 'assets/images/content/avatars-11.png',
            index: 2,
            link: '/grant',
        },
        {
            category: 'Technical / Tool Development',
            name: 'Rust SDK',
            amount: '$5,000 - $6,000',
            text: 'At the end of the 19th century, physics appeared to be at an apex. Several people are reported to have said something like this',
            image: 'assets/images/content/avatars-11.png',
            index: 1,
            link: '/grant',
        },
        {
            category: 'Technical / Tool Development',
            name: 'Hack for Inclusion Sponsorship',
            amount: '$5,000 - $6,000',
            text: 'Later, however (in the beginning of the twentieth century), it was found that light did indeed sometimes behave like a particle.',
            image: 'assets/images/content/avatars-12.png',
            index: 1,
            link: '/grant',
        },
        {
            category: 'Governance',
            name: 'Gitcoin Grants Round 13 sponsorship',
            amount: '$5,000 - $6,000',
            text: 'So we have to learn about them in a sort of abstract or imaginative fashion and not by connection with our direct experience.',
            image: 'assets/images/content/avatars-10.png',
            index: 2,
            link: '/grant',
        },
    ];

    activeTrigger: number = 0;

    changeActiveTrigger(index: number): void {
        this.activeTrigger = index;
    }
}
