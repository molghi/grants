import { Component, OnInit } from '@angular/core';

interface Item {
    category: string;
    index: number;
    name: string;
    description: string;
    amount: string;
    image: string;
}

@Component({
    selector: 'app-programs-block',
    templateUrl: './programs-block.component.html',
    styleUrls: ['./programs-block.component.scss'],
})
export class ProgramsBlockComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    title: string = 'Program expenses';

    triggers: Array<{ title: string }> = [
        { title: 'All' },
        { title: 'Technical' },
        { title: 'Governance' },
        { title: 'Marketing' },
        { title: 'Analytics' },
    ];

    items: Array<Item> = [
        {
            category: 'Marketing',
            index: 3,
            name: 'Airtable Yearly Subscription',
            description: 'Airtable is used to build the application form and store all application data.',
            amount: '$500.00',
            image: 'assets/images/icons/external-grey.svg',
        },
        {
            category: 'Technical',
            index: 1,
            name: 'Lorem ipsum dolor',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum mollitia quasi quo laborum quibusdam.',
            amount: '$1,500.00',
            image: 'assets/images/icons/external-grey.svg',
        },
        {
            category: 'Governance',
            index: 2,
            name: 'Fugiat ducimus iste quis',
            description:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel maiores corrupti eos pariatur, fugiat ducimus iste quis sed quibusdam, harum repellat ipsam.',
            amount: '$3,500.00',
            image: 'assets/images/icons/external-grey.svg',
        },
        {
            category: 'Analytics',
            index: 4,
            name: 'Stova qui deserunt excepturi eligendi',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nihil dignissimos modi rem fuga impedit rerum iste harum libero ab aliquam, adipisci magnam minima qui deserunt excepturi eligendi! Nesciunt amet harum repudiandae dolore?',
            amount: '$2,750.00',
            image: 'assets/images/icons/external-grey.svg',
        },
        {
            category: 'Marketing',
            index: 3,
            name: 'Airtable Yearly Subscription',
            description: 'Airtable is used to build the application form and store all application data.',
            amount: '$500.00',
            image: 'assets/images/icons/external-grey.svg',
        },
        {
            category: 'Marketing',
            index: 3,
            name: 'Airtable Yearly Subscription',
            description: 'Airtable is used to build the application form and store all application data.',
            amount: '$500.00',
            image: 'assets/images/icons/external-grey.svg',
        },
        {
            category: 'Marketing',
            index: 3,
            name: 'Airtable Yearly Subscription',
            description: 'Airtable is used to build the application form and store all application data.',
            amount: '$500.00',
            image: 'assets/images/icons/external-grey.svg',
        },
    ];

    activeTrigger: number = 0;

    changeActiveTrigger(index: number): void {
        this.activeTrigger = index;
    }
}
