import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-discover-initiatives',
    templateUrl: './discover.component.html',
    styleUrls: ['./discover.component.scss'],
})
export class DiscoverInitiativesComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    title: string = 'Discover initiatives (RFPs)';

    text: string =
        'The list below includes initial ideas that we think could make excellent Grants. This is a living list that will continue to update as ideas popup.';

    triggers: Array<any> = [{ title: 'All' }, { title: 'Open' }, { title: 'Funded' }, { title: 'Completed' }];

    items: Array<any> = [
        {
            title: 'Funding Rate Page',
            text: 'Page that provides a live look at all funding rates with popular timeframes in annualized format',
            amount: '$10,000 - $25,000',
            label: 'Funded',
            index: 2,
        },
        {
            title: 'CLI Trading Tool',
            text: 'Self-hosted CLI tool leveraging the dYdX API to allow all functionalities from a terminal',
            amount: '$10,000 - $25,000',
            label: 'Funded',
            index: 2,
        },
        {
            title: 'New Language SDKs',
            text: 'Replicate existing Python SDK to new programming languages with all the same features',
            amount: '$10,000 - $25,000',
            label: 'Open',
            index: 1,
        },
        {
            title: 'Liquidation Alert Tool',
            text: 'Self-hosted tool that alerts the trader of upcoming liquidation prices across multiple messaging venues',
            amount: '$10,000 - $25,000',
            label: 'Completed',
            index: 3,
        },
        {
            title: 'Governance Dashboard',
            text: 'Governance page to promote discussions, proposals, delegation and voting',
            amount: '$10,000 - $25,000',
            label: 'Funded',
            index: 2,
        },
        {
            title: 'Delegation Tool',
            text: 'Webpage to allow active participants to market their voting and enable direct delegation from DYDX holders',
            amount: '$10,000 - $25,000',
            label: 'Funded',
            index: 2,
        },
        {
            title: 'Newsletter',
            text: 'Weekly or Monthly newsletters promoting and educating the dYdX platform',
            amount: '$10,000 - $25,000',
            label: 'Funded',
            index: 2,
        },
        {
            title: 'Academy Contributions',
            text: 'Webpages, Courses, Glossaries and Youtube libraries educating new users on dYdX',
            amount: '$10,000 - $25,000',
            label: 'Funded',
            index: 2,
        },
        {
            title: 'Discord bots',
            text: 'Additional Discord bots that notify members of activity on dYdX and governance',
            amount: '$10,000 - $25,000',
            label: 'Open',
            index: 1,
        },
        {
            title: 'Reward tracking & Simulator',
            text: 'Page or tool that allows traders to calculate future rewards and simulate earnings from activity',
            amount: '$10,000 - $25,000',
            label: 'Funded',
            index: 2,
        },
    ];

    activeTrigger: number = 0;

    changeActiveTrigger(index: number): void {
        // if (index === this.activeTrigger) this.activeTrigger = -1;
        // else
        this.activeTrigger = index;
    }
}
