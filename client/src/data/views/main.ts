import { View } from "../../types/view.class";

const args = {
    name: 'main',
    template: '<div class="main-content" id="main-content"></div>',
    anchorElementId: ''
}

export const mainView = new View(args.name, args.template, args.anchorElementId);
