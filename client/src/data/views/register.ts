import { View } from "../../types/view.class";

const args = {
    name: 'register',
    template: `
        <h2>
            Registration
        </h2>
        <h3>
            Already registerd? Log in <a onclick="window.deckrApp.navigateLogin()">here</a>
        </h3>
    
        <div>

        </div>
    `,
    anchorElementId: 'main-content'
}

export const registerView = new View(args.name, args.template, args.anchorElementId);
