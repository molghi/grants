import { Component, OnInit } from '@angular/core';

interface Input {
    type: string;
    label: string;
    text: string;
    placeholder: string;
    isRequired: boolean;
}

@Component({
    selector: 'app-application-form',
    templateUrl: './application-form.component.html',
    styleUrls: ['./application-form.component.scss'],
})
export class ApplicationFormComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    title: string = 'Grant application';

    buttonText: string = 'Send';

    fields: Array<Input> = [
        { type: 'input', label: 'Name', text: '', placeholder: '', isRequired: true },
        { type: 'input', label: 'Email', text: '', placeholder: '', isRequired: true },
        { type: 'textarea', label: 'About You', text: 'Tell us something about you', placeholder: '', isRequired: true },
        {
            type: 'textarea',
            label: 'Additional Links',
            text: 'For instance, you social media accounts',
            placeholder: '',
            isRequired: false,
        },
    ];
}
