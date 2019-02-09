/*****************************************************
* Name: Chris Woodward                               *
* Date: 02/08/2019                                   *
* Course: SEN632                                     *
* Assigment: Project                                 *
* Instructor:  James Garrova                         *
******************************************************/

import { View } from "../../types/view.class";

const args = {
    name: 'contracts',
    template: `
        <a href="#" class="navigate-back-link" onclick="window.deckrApp.navigate('dashboard')">Back</a>
        <h2>
            Contracts
        </h2>
        <hr>
        <div class="contracts-content content-grid" id="contracts-content"></div>
    `,
    anchorElementId: 'main-content'
}

export const contractsView = new View(args.name, args.template, args.anchorElementId);
