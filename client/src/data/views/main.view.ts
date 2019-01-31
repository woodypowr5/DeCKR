import { View } from "../../types/view.class";

const args = {
    name: 'main',
    template: `
        <main class="mdl-layout__content">
            <div class="page-content main-content" id="main-content"></div>
        </main>
    `,
    anchorElementId: ''
}

export const mainView = new View(args.name, args.template, args.anchorElementId);
