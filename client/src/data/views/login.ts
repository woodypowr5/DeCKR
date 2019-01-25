import { View } from "../../types/view.class";

const args = {
    name: 'login',
    template: `
        <h2>Login</h2>
        <button onclick="window.deckrApp.login()">Simulate Login</button>
    `,
    anchorElementId: 'main-content'
}

export const loginView = new View(args.name, args.template, args.anchorElementId);
