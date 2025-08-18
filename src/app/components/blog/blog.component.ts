import { Component, OnInit } from '@angular/core';

interface Item {
    image: string;
    text: string;
    index: number;
    title: string;
    date: string;
    link: string;
}

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    title: string = 'Blog';

    buttonText: string = 'Load more posts';

    triggers: Array<{ title: string }> = [
        { title: 'All' },
        { title: 'Latest' },
        { title: 'Funding round' },
        { title: 'Spotlight' },
        { title: 'News & updates' },
    ];

    items: Array<Item> = [
        {
            image: 'assets/images/content/round-9.png',
            text: 'Funding round',
            index: 1,
            title: 'Round 9 of approvals',
            date: 'December 24, 2021',
            link: '/blog-post',
        },
        {
            image: 'assets/images/content/new__item-2.png',
            text: 'Funding round',
            index: 2,
            title: 'Round 8 of approvals',
            date: 'December 24, 2021',
            link: '/blog-post',
        },
        {
            image: 'assets/images/content/round-7.png',
            text: 'Funding round',
            index: 1,
            title: 'Round 7 of approvals',
            date: 'December 24, 2021',
            link: '/blog-post',
        },
        {
            image: 'assets/images/content/round-6.png',
            text: 'Funding round',
            index: 2,
            title: 'Round 6 of approvals',
            date: 'December 24, 2021',
            link: '/blog-post',
        },
        {
            image: 'assets/images/content/round-5.png',
            text: 'Funding round',
            index: 3,
            title: 'Round 5 of approvals',
            date: 'December 24, 2021',
            link: '/blog-post',
        },
        {
            image: 'assets/images/content/round-4.png',
            text: 'Funding round',
            index: 4,
            title: 'Round 4 of approvals',
            date: 'December 24, 2021',
            link: '/blog-post',
        },
    ];

    activeTrigger: number = 0;

    changeActiveTrigger(index: number): void {
        this.activeTrigger = index;
    }
}
