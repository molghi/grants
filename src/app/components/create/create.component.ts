import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    title: string = 'Have a project in mind?';

    text: string = 'Let’s create something awesome.';

    button: { [key: string]: string } = {
        text: 'Apply for grant',
        link: '#',
    };
}
