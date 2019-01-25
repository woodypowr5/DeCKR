import { View } from "../../types/view.class";

const args = {
    name: 'header',
    template: `
        <div>I\'m the header</div>
    `,
    anchorElementId: ''
}

export const headerView = new View(args.name, args.template, args.anchorElementId);
