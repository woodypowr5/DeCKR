/*****************************************************
* Name: Chris Woodward                               *
* Date: 02/08/2019                                   *
* Course: SEN632                                     *
* Assigment: Project                                 *
* Instructor:  James Garrova                         *
******************************************************/

import { View } from "../../types/view.class";

const args = {
    name: 'securityGroups',
    template: `
        <a  href="#" class="navigate-back-link"  onclick="window.deckrApp.navigate('dashboard')">Back</a>
        <h2>
            Security Groups
        </h2>
        <hr>
        <div class="security-groups-content content-grid" id="security-groups-content"></div>`
    ,
    anchorElementId: 'main-content'
}

export const securityGroupsView = new View(args.name, args.template, args.anchorElementId);
