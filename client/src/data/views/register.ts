import { View } from "../../types/view.class";

const args = {
    name: 'register',
    template: '<h1>Registration</h1><div></div>',
    anchorElementId: 'main-content'
}

export const registerView = new View(args.name, args.template, args.anchorElementId);
