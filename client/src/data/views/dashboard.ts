import { View } from "../../types/view.class";

const args = {
    name: 'dashboard',
    template: `
        <h2>Dashboard</h2>
        <div class="dashboard-content" id="dashboard-content"> 
        <button onclick="window.deckrApp.navigateTrainings()">Show Trainings</button>
        <button onclick="window.deckrApp.navigateContracts()">Show Contracts</button>
        <button onclick="window.deckrApp.navigateSecurityGroups()">Show Security Groups</button>
        <button onclick="window.deckrApp.logout()">Logout</button>
        </div>
    `,
    anchorElementId: 'main-content'
}

export const dashboardView = new View(args.name, args.template, args.anchorElementId);
