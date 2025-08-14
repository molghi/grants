import { Component, OnInit } from '@angular/core';

interface Item {
    title: string;
    text: string;
}

@Component({
    selector: 'app-faq',
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    title: string = 'Frequently asked questions';

    text: string =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla risus, consectetur ut bibendum non, gravida non libero.';

    items: Array<Item> = [
        {
            title: 'How do I apply?',
            text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos corrupti exercitationem consequuntur
                        nisi, non quo optio impedit sint nulla similique repellat magni accusantium quidem quam, provident nemo
                        minus esse! Ab quasi est rem a? Deserunt eligendi iusto aliquam!`,
        },
        {
            title: 'Can I apply as a U.S. based person/company?',
            text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos corrupti exercitationem consequuntur
                        nisi, non quo optio impedit sint nulla similique repellat magni accusantium quidem quam, provident nemo
                        minus esse! Ab quasi est rem a? Deserunt eligendi iusto aliquam!`,
        },
        {
            title: 'How will I be compensated?',
            text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos corrupti exercitationem consequuntur
                        nisi, non quo optio impedit sint nulla similique repellat magni accusantium quidem quam, provident nemo
                        minus esse! Ab quasi est rem a? Deserunt eligendi iusto aliquam!`,
        },
        {
            title: 'What type of project will qualify for a Grant?',
            text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos corrupti exercitationem consequuntur
                        nisi, non quo optio impedit sint nulla similique repellat magni accusantium quidem quam, provident nemo
                        minus esse! Ab quasi est rem a? Deserunt eligendi iusto aliquam!`,
        },
        {
            title: 'What is the application timeline? When can I expect to hear back?',
            text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos corrupti exercitationem consequuntur
                        nisi, non quo optio impedit sint nulla similique repellat magni accusantium quidem quam, provident nemo
                        minus esse! Ab quasi est rem a? Deserunt eligendi iusto aliquam!`,
        },
        {
            title: 'How can I increase my chances of getting funded?',
            text: ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos corrupti exercitationem consequuntur
                        nisi, non quo optio impedit sint nulla similique repellat magni accusantium quidem quam, provident nemo
                        minus esse! Ab quasi est rem a? Deserunt eligendi iusto aliquam!`,
        },
        {
            title: 'How often do you approve new Rounds of funding?',
            text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi eos corrupti exercitationem consequuntur
                        nisi, non quo optio impedit sint nulla similique repellat magni accusantium quidem quam, provident nemo
                        minus esse! Ab quasi est rem a? Deserunt eligendi iusto aliquam!`,
        },
    ];

    activeItem: number = -1;

    changeActiveItem(index: number) {
        if (index === this.activeItem) this.activeItem = -1;
        else this.activeItem = index;
    }
}
