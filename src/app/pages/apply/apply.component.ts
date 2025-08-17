import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-apply',
    templateUrl: './apply.component.html',
    styleUrls: ['./apply.component.scss'],
})
export class ApplyComponent implements OnInit {
    constructor(private titleService: Title) {}

    ngOnInit(): void {
        this.titleService.setTitle('Apply for Grants | dYdX Grants');
    }

    title: string = 'Apply for a grant';

    text: string = 'Please complete the application below for Grant consideration!';

    items: Array<any> = [
        {
            title: 'How are grants selected?',
            text: 'When assessing applications, the Grants team follows standard criteria using the questions below to guide our decision making.',
            items: [
                {
                    title: 'Relevance',
                    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos corrupti exercitationem consequuntur nisi, non quo optio impedit sint nulla similique repellat magni accusantium quidem quam, provident nemo minus esse! Ab quasi est rem a? Deserunt eligendi iusto aliquam!',
                },
                {
                    title: 'Benefit',
                    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos corrupti exercitationem consequuntur nisi, non quo optio impedit sint nulla similique repellat magni accusantium quidem quam, provident nemo minus esse! Ab quasi est rem a? Deserunt eligendi iusto aliquam!',
                },
                {
                    title: 'Feasibility',
                    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos corrupti exercitationem consequuntur nisi, non quo optio impedit sint nulla similique repellat magni accusantium quidem quam, provident nemo minus esse! Ab quasi est rem a? Deserunt eligendi iusto aliquam!',
                },
                {
                    title: 'Execution',
                    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos corrupti exercitationem consequuntur nisi, non quo optio impedit sint nulla similique repellat magni accusantium quidem quam, provident nemo minus esse! Ab quasi est rem a? Deserunt eligendi iusto aliquam!',
                },
                {
                    title: 'Qualification',
                    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos corrupti exercitationem consequuntur nisi, non quo optio impedit sint nulla similique repellat magni accusantium quidem quam, provident nemo minus esse! Ab quasi est rem a? Deserunt eligendi iusto aliquam!',
                },
                {
                    title: 'Originality',
                    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos corrupti exercitationem consequuntur nisi, non quo optio impedit sint nulla similique repellat magni accusantium quidem quam, provident nemo minus esse! Ab quasi est rem a? Deserunt eligendi iusto aliquam!',
                },
                {
                    title: 'Cost',
                    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos corrupti exercitationem consequuntur nisi, non quo optio impedit sint nulla similique repellat magni accusantium quidem quam, provident nemo minus esse! Ab quasi est rem a? Deserunt eligendi iusto aliquam!',
                },
            ],
        },
    ];
}
