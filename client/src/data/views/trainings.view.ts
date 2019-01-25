import { View } from "../../types/view.class";

const args = {
    name: 'trainings',
    template: `
        <button onclick="window.deckrApp.navigateDashboard()">Back</button>
        <h2>
            Trainings
        </h2>
        <div class="trainings-content" id="trainings-content"></div>`
    ,
    anchorElementId: 'main-content'
}

export const trainingsView = new View(args.name, args.template, args.anchorElementId);
