import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-application',
    templateUrl: './application.component.html',
    styleUrls: ['./application.component.scss'],
})
export class ApplicationComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    title: string = 'Application process';

    text: string =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla risus, consectetur ut bibendum non, gravida non libero.';

    items: Array<any> = [
        {
            image: 'assets/images/content/app-1.png',
            title: 'application',
            text: 'Submit a complete application to the dYdX Grants Team including as many details as possible about the proposed idea and their background.',
        },
        {
            image: 'assets/images/content/app-2.png',
            title: 'Interview',
            text: "If your application is selected, the dYdX Grants will conduct 1-2 interviews to collect more information on the Applicant's background and the proposal.",
        },
        {
            image: 'assets/images/content/app-3.png',
            title: 'Grant offer',
            text: 'The dYdX Grants team will determine if the proposal fits into the grant program. A vesting schedule and timeline for product development reports will also be determined in the offer.',
        },
    ];
}
