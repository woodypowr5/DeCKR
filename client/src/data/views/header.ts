import { View } from "../../types/view.class";

const args = {
    name: 'header',
    template: 'hi',
    anchorElementId: '#header'
}

export const headerView = new View(args.name, args.template, args.anchorElementId);
