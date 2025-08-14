import { Component, OnInit } from '@angular/core';

interface Item {
    link: string;
    image: string;
    class: string;
    title: string;
    date: string;
}

@Component({
    selector: 'app-new',
    templateUrl: './new.component.html',
    styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    title: string = 'What’s new?';

    text: string =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla risus, consectetur ut bibendum non, gravida non libero.';

    button: { [key: string]: string } = {
        text: 'Read more on our blog',
        link: '#',
    };

    items: Array<Item> = [
        {
            link: '#',
            image: 'assets/images/content/new__item-1.png',
            class: 'Funding round',
            title: 'Round 9 of approvals',
            date: 'January 1, 2022',
        },
        {
            link: '#',
            image: 'assets/images/content/new__item-2.png',
            class: 'Funding round',
            title: 'Round 8 of approvals',
            date: 'December 24, 2021',
        },
    ];
}
