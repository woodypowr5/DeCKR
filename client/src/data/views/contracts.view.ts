import { View } from "../../types/view.class";

const args = {
    name: 'contracts',
    template: `
        <button onclick="window.deckrApp.navigateDashboard()">Back</button>
        <h2>
            Contracts
        </h2>
        <div class="contracts-content" id="contracts-content"></div>
    `,
    anchorElementId: 'main-content'
}

export const contractsView = new View(args.name, args.template, args.anchorElementId);
