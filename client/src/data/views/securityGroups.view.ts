import { View } from "../../types/view.class";

const args = {
    name: 'securityGroups',
    template: `
        <a  href="#" class="navigate-back-link"  onclick="window.deckrApp.navigateDashboard()">Back</a>
        <h2>
            Security Groups
        </h2>
        <hr>
        <div class="security-groups-content content-grid" id="security-groups-content"></div>`
    ,
    anchorElementId: 'main-content'
}

export const securityGroupsView = new View(args.name, args.template, args.anchorElementId);
