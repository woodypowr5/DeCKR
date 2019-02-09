/*****************************************************
* Name: Chris Woodward                               *
* Date: 02/08/2019                                   *
* Course: SEN632                                     *
* Assigment: Project                                 *
* Instructor:  James Garrova                         *
******************************************************/

import { View } from "../../types/view.class";

const args = {
    name: 'dashboard',
    template: `
        <h2>[[id]] - My Dashboard</h2>
        <hr>
        <div class="dashboard-content" id="dashboard-content"> 
            <div class="dashboard-card demo-card-wide mdl-card mdl-shadow--2dp">
                <div class="mdl-card__title">
                    <h2 class="mdl-card__title-text">Choose Your Destination: </h2>
                </div>
                <div class="dashboard-button-container mdl-card__actions mdl-card--border">
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick="window.deckrApp.navigate('trainings')">View Trainings</button>
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick="window.deckrApp.navigate('contracts')">View Contracts</button>
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick="window.deckrApp.navigate('securityGroups')">View Groups</button>
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick="window.deckrApp.navigate('changePassword')">Change Password</button>
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onclick="window.deckrApp.logout()">Logout</button>
                </div>
            </div>    
        </div>
    `,
    anchorElementId: 'main-content'
}

export const dashboardView = new View(args.name, args.template, args.anchorElementId);
