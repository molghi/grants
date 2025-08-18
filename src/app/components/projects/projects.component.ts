import { Component, OnInit } from '@angular/core';

interface Item {
    category: string;
    name: string;
    amount: string;
    text: string;
    image: string;
    link: string;
}

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    title: string = 'Projects built with grants';

    text: string =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla risus, consectetur ut bibendum non, gravida non libero.';

    button: { [key: string]: string } = {
        text: 'View all funded projects',
        link: '/grants',
    };

    items: Array<Item> = [
        {
            category: 'Crowdfund',
            link: '/grant',
            name: 'Funding rates page',
            amount: '$5,000 - $6,000',
            text: `Grant will be used to build a dedicated web app to give traders a view of all dYdX asset funding rates
                            across multiple timeframes. The page will be interactive to include deep diving across different
                            assets and historical analysis of changing rates. It will also include API functionalities to allow
                            developer access.`,
            image: 'assets/images/content/avatars-1.png',
        },
        {
            category: 'Edition',
            link: '/grant',
            name: 'Tradingview integration',
            amount: '$5,000 - $6,000',
            text: `The grant will be used to build a web application that integrates Tradingview strategies into a dYdX
                            Trading account to execute trades directly through a strategy. Users will be able to tap into
                            Tradingview resources and test out different ...`,
            image: 'assets/images/content/avatars-2.png',
        },
        {
            category: 'Entry',
            link: '/grant',
            name: 'Rewards optimization research and paper',
            amount: '$5,000 - $6,000',
            text: `The Grant will be used to write a full research report and code samples that will determine optimal
                            trading strategies for rewards maximization. The paper will be marketed across several platforms and
                            shared among trading circles to help readership.`,
            image: 'assets/images/content/avatars-3.png',
        },
        {
            category: 'Crowdfund',
            link: '/grant',
            name: 'Funding rates page',
            amount: '$5,000 - $6,000',
            text: `Grant will be used to build a dedicated web app to give traders a view of all dYdX asset funding rates
                            across multiple timeframes. The page will be interactive to include deep diving across different
                            assets and historical analysis of changing rates. It will also include API functionalities to allow
                            developer access.`,
            image: 'assets/images/content/avatars-1.png',
        },
        {
            category: 'Edition',
            link: '/grant',
            name: 'Tradingview integration',
            amount: '$5,000 - $6,000',
            text: `The grant will be used to build a web application that integrates Tradingview strategies into a dYdX
                            Trading account to execute trades directly through a strategy. Users will be able to tap into
                            Tradingview resources and test out different ...`,
            image: 'assets/images/content/avatars-2.png',
        },
        {
            category: 'Entry',
            link: '/grant',
            name: 'Rewards optimization research and paper',
            amount: '$5,000 - $6,000',
            text: `The Grant will be used to write a full research report and code samples that will determine optimal
                            trading strategies for rewards maximization. The paper will be marketed across several platforms and
                            shared among trading circles to help readership.`,
            image: 'assets/images/content/avatars-3.png',
        },
        {
            category: 'Crowdfund',
            link: '/grant',
            name: 'Funding rates page',
            amount: '$5,000 - $6,000',
            text: ` Grant will be used to build a dedicated web app to give traders a view of all dYdX asset funding rates
                            across multiple timeframes. The page will be interactive to include deep diving across different
                            assets and historical analysis of changing rates. It will also include API functionalities to allow
                            developer access.`,
            image: 'assets/images/content/avatars-1.png',
        },
        {
            category: 'Edition',
            link: '/grant',
            name: 'Tradingview integration',
            amount: '$5,000 - $6,000',
            text: `The grant will be used to build a web application that integrates Tradingview strategies into a dYdX
                            Trading account to execute trades directly through a strategy. Users will be able to tap into
                            Tradingview resources and test out different ...`,
            image: 'assets/images/content/avatars-2.png',
        },
        {
            category: 'Entry',
            link: '/grant',
            name: 'Rewards optimization research and paper',
            amount: '$5,000 - $6,000',
            text: `The Grant will be used to write a full research report and code samples that will determine optimal
                            trading strategies for rewards maximization. The paper will be marketed across several platforms and
                            shared among trading circles to help readership.`,
            image: 'assets/images/content/avatars-3.png',
        },
    ];
}
