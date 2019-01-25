import { View } from "../../types/view.class";

const args = {
    name: 'securityGroups',
    template: `
        <button onclick="window.deckrApp.navigateDashboard()">Back</button>
        <h2>
            Security Groups
        </h2>
        <div class="security-groups-content" id="security-groups-content"></div>`
    ,
    anchorElementId: 'main-content'
}

export const securityGroupsView = new View(args.name, args.template, args.anchorElementId);
