import { View } from "../../types/view.class";

const args = {
    name: 'changePassword',
    template: `
        <a href="#" class="navigate-back-link" onclick="window.deckrApp.navigate('dashboard')">Back</a>
        <h2>
            Change Password
        </h2>
        <h3>
            This functionality is outside the scope of this project
        </h3>
    `,
    anchorElementId: 'main-content'
}

export const changePasswordView = new View(args.name, args.template, args.anchorElementId);
