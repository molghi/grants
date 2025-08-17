import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-faq-page',
    templateUrl: './faq-page.component.html',
    styleUrls: ['./faq-page.component.scss'],
})
export class FaqPageComponent implements OnInit {
    constructor(private titleService: Title) {}

    ngOnInit(): void {
        this.titleService.setTitle('FAQ | dYdX Grants');
    }

    items: Array<any> = [
        {
            title: 'Grant application process',
            items: [
                {
                    title: 'How do I apply?',
                    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos corrupti exercitationem consequuntur nisi, non quo optio impedit sint nulla similique repellat magni accusantium quidem quam, provident nemo minus esse! Ab quasi est rem a? Deserunt eligendi iusto aliquam!',
                },
                {
                    title: 'Can I apply as a U.S. based person/company?',
                    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos corrupti exercitationem consequuntur nisi, non quo optio impedit sint nulla similique repellat magni accusantium quidem quam, provident nemo minus esse! Ab quasi est rem a? Deserunt eligendi iusto aliquam!',
                },
                {
                    title: 'How will I be compensated?',
                    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos corrupti exercitationem consequuntur nisi, non quo optio impedit sint nulla similique repellat magni accusantium quidem quam, provident nemo minus esse! Ab quasi est rem a? Deserunt eligendi iusto aliquam!',
                },
                {
                    title: 'What type of project will qualify for a Grant?',
                    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos corrupti exercitationem consequuntur nisi, non quo optio impedit sint nulla similique repellat magni accusantium quidem quam, provident nemo minus esse! Ab quasi est rem a? Deserunt eligendi iusto aliquam!',
                },
                {
                    title: 'What is the application timeline? When can I expect to hear back?',
                    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos corrupti exercitationem consequuntur nisi, non quo optio impedit sint nulla similique repellat magni accusantium quidem quam, provident nemo minus esse! Ab quasi est rem a? Deserunt eligendi iusto aliquam!',
                },
                {
                    title: 'How can I increase my chances of getting funded?',
                    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos corrupti exercitationem consequuntur nisi, non quo optio impedit sint nulla similique repellat magni accusantium quidem quam, provident nemo minus esse! Ab quasi est rem a? Deserunt eligendi iusto aliquam!',
                },
                {
                    title: 'How often do you approve new Rounds of funding?',
                    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos corrupti exercitationem consequuntur nisi, non quo optio impedit sint nulla similique repellat magni accusantium quidem quam, provident nemo minus esse! Ab quasi est rem a? Deserunt eligendi iusto aliquam!',
                },
            ],
        },
        {
            title: 'Selection criteria',
            items: [
                {
                    title: 'What is the dYdX Grants Trust?',
                    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos corrupti exercitationem consequuntur nisi, non quo optio impedit sint nulla similique repellat magni accusantium quidem quam, provident nemo minus esse! Ab quasi est rem a? Deserunt eligendi iusto aliquam!',
                },
                {
                    title: 'BeneWhere are funds held walrus?',
                    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos corrupti exercitationem consequuntur nisi, non quo optio impedit sint nulla similique repellat magni accusantium quidem quam, provident nemo minus esse! Ab quasi est rem a? Deserunt eligendi iusto aliquam!',
                },
                {
                    title: 'When was the program launched?',
                    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos corrupti exercitationem consequuntur nisi, non quo optio impedit sint nulla similique repellat magni accusantium quidem quam, provident nemo minus esse! Ab quasi est rem a? Deserunt eligendi iusto aliquam!',
                },
                {
                    title: 'Who are the Trustees?',
                    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos corrupti exercitationem consequuntur nisi, non quo optio impedit sint nulla similique repellat magni accusantium quidem quam, provident nemo minus esse! Ab quasi est rem a? Deserunt eligendi iusto aliquam!',
                },
                {
                    title: 'What and who is the Enforcer?',
                    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos corrupti exercitationem consequuntur nisi, non quo optio impedit sint nulla similique repellat magni accusantium quidem quam, provident nemo minus esse! Ab quasi est rem a? Deserunt eligendi iusto aliquam!',
                },
            ],
        },
        {
            title: 'The Grants Trust',
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
