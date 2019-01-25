import { View } from "../../types/view.class";

const args = {
    name: 'footer',
    template: `
        <div>I\'m the footer</div>
    `,
    anchorElementId: ''
}

export const footerView = new View(args.name, args.template, args.anchorElementId);
