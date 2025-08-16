import { Component, OnInit, Input } from '@angular/core';

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

    @Input() type!: string;
    // @Input() items!: Array<Item>;
    @Input() items!: Array<any>;

    ngOnInit(): void {}

    title: string = 'Frequently asked questions';

    text: string =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla risus, consectetur ut bibendum non, gravida non libero.';

    activeItem: number = -1;

    changeActiveItem(index: number) {
        if (index === this.activeItem) this.activeItem = -1;
        else this.activeItem = index;
    }
}
