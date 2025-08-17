import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-blog-post',
    templateUrl: './blog-post.component.html',
    styleUrls: ['./blog-post.component.scss'],
})
export class BlogPostComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    arrowImage: string = 'assets/images/icons/fi_arrow-right.svg';

    category: string = 'Funding round';

    title: string = 'Round 9 of approvals';

    postImage: string = 'assets/images/content/blog-post-pic.png';

    postImageCaption: string = 'This is an image caption';

    author: { [key: string]: string } = {
        image: 'assets/images/content/author-mini.png',
        name: 'dYdX Grants Team',
    };

    quote: { [key: string]: string } = {
        text: `The more realistic an experience we provide, the more real feedback we can get. With a more static mockup, or broad-line prototype, or a rich prototype with placeholder data, you tend to get more hypothetical feedback.`,
        author: 'Creighton Abrams',
    };

    paragraphs: Array<{ type: string; text: string }> = [
        { type: 'text', text: 'Hi Everyone!' },
        {
            type: 'text',
            text: `Excited to share another round of funding approved by the Committee! For Round 6, we have 5 grantees with a total of $246,000.00 in DYDX funding. Check out the table below for more information on each grant.`,
        },
        {
            type: 'text',
            text: `We’re also happy to share that the Committee revamp is close to getting finalized. This revamp will enable payments to be complete by the Grants multisig. The team is working on the final documentation and will share everything with the community as soon as its ready. We’re excited to finally start paying our Grantees to really get things going!`,
        },
        { type: 'bigTitle', text: 'Centralization lets you make decisions quickly' },
        {
            type: 'text',
            text: 'We’re also happy to share that the Committee revamp is close to getting finalized. This revamp will enable payments to be complete by the Grants multisig. The team is working on the final documentation and will share everything with the community as soon as its ready. We’re excited to finally start paying our Grantees to really get things going!',
        },
        { type: 'smallTitle', text: 'Centralization lets you make decisions quickly' },
        {
            type: 'text',
            text: 'We’re also happy to share that the Committee revamp is close to getting finalized. This revamp will enable payments to be complete by the Grants multisig. The team is working on the final documentation and will share everything with the community as soon as its ready. We’re excited to finally start paying our Grantees to really get things going!',
        },
        {
            type: 'text',
            text: 'We’re also happy to share that the Committee revamp is close to getting finalized. This revamp will enable payments to be complete by the Grants multisig. The team is working on the final documentation and will share everything with the community as soon as its ready. We’re excited to finally start paying our Grantees to really get things going!',
        },
    ];
}
