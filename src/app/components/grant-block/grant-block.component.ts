import { Component, OnInit } from '@angular/core';

interface Round {
    name: string;
    date: string;
    text: string;
    amount: string;
    image: string;
}

interface Item {
    type: string;
    text: string;
}

@Component({
    selector: 'app-grant-block',
    templateUrl: './grant-block.component.html',
    styleUrls: ['./grant-block.component.scss'],
})
export class GrantBlockComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    arrowImage: string = 'assets/images/icons/fi_arrow-right.svg';

    mainImage: string = 'assets/images/content/grant.png';

    category: string = 'Education';

    name: string = 'Youtube dYdX Education Library';

    status: string = 'Funded';

    amount: string = '$5,000';

    link: string = '#';

    team: { [key: string]: any } = {
        title: 'Team',
        members: [
            { image: 'assets/images/content/grant-avatar-1.jpg', name: 'Theresa Webb' },
            { image: 'assets/images/content/grant-avatar-2.png', name: 'Marty McMarty' },
        ],
    };

    content: Array<Item> = [
        { type: 'title', text: 'Description' },
        {
            type: 'text',
            text: 'Grant includes work on Funding Rates page, Rewards & Tracking Simulator, and CLI Trading tool. All will be combined in a community accessible webpage that will continue to host additional work done and maintenance on behalf of Chaos Labs.',
        },
        { type: 'title', text: 'Purpose' },
        {
            type: 'text',
            text: 'Funding Rates page will help promote and guide traders around Perpetual premiums found across all assets traded on dYdX. Rewards & Tracking simulator will help market the benefits of trading on dYdX and assist current traders in mapping out their rewards. The CLI trading tool will make it easier for non-UI based traders to execute quickly on dYdX. The general purpose of this grant is to recruit Chaos Labs, a very qualified contributor, to work with dYdX on current and future projects.',
        },
        { type: 'title', text: 'Execution' },
        {
            type: 'text',
            text: '3 months to completion. Each individual grant is estimated to take 120 days, but will be worked on concurrently.',
        },
        { type: 'title', text: 'Payment structure' },
        { type: 'text', text: '25% upfront / 75% at completion of all Grants' },
        { type: 'title', text: 'Useful links' },
        { type: 'link', text: 'www.granttitleproject.com' },
        { type: 'link', text: 'www.granttitleproject.com' },
        { type: 'link', text: 'www.granttitleproject.com' },
        { type: 'title', text: 'Funding transactions' },
    ];

    rounds: Array<Round> = [
        {
            name: 'Round 9',
            date: '07.16.2022',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo rerum alias dolor enim? A error nam tempora eaque quibusdam esse quis unde. Totam veniam vel, exercitationem consequatur cupiditate eveniet facilis aliquam quam illo.',
            amount: '$250,000.00',
            image: 'assets/images/icons/external-grey.svg',
        },
        {
            name: 'Round 10',
            date: '07.26.2022',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed nesciunt culpa necessitatibus labore nam?',
            amount: '$350,000.00',
            image: 'assets/images/icons/external-grey.svg',
        },
    ];
}
