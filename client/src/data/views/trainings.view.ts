/*****************************************************
* Name: Chris Woodward                               *
* Date: 02/08/2019                                   *
* Course: SEN632                                     *
* Assigment: Project                                 *
* Instructor:  James Garrova                         *
******************************************************/

import { View } from "../../types/view.class";

const args = {
    name: 'trainings',
    template: `
        <a href="#" class="navigate-back-link" onclick="window.deckrApp.navigate('dashboard')">Back</a>
        <h2>
            Trainings
        </h2>
        <hr>
        <div class="trainings-content content-grid" id="trainings-content"></div>`
    ,
    anchorElementId: 'main-content'
}

export const trainingsView = new View(args.name, args.template, args.anchorElementId);
