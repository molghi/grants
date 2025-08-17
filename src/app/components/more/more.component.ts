import { Component, OnInit, Input } from '@angular/core';

interface Link {
    text: string;
    address: string;
}

@Component({
    selector: 'app-more',
    templateUrl: './more.component.html',
    styleUrls: ['./more.component.scss'],
})
export class MoreComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    @Input() title!: string;
    @Input() items!: Array<any>;
    @Input() layout?: string;
    @Input() link?: Link;
}
