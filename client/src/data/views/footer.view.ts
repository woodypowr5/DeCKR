import { View } from "../../types/view.class";

const args = {
    name: 'footer',
    template: `
       </div>
    `,
    anchorElementId: ''
}

export const footerView = new View(args.name, args.template, args.anchorElementId);
