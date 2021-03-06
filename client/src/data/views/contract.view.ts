/*****************************************************
* Name: Chris Woodward                               *
* Date: 02/08/2019                                   *
* Course: SEN632                                     *
* Assigment: Project                                 *
* Instructor:  James Garrova                         *
******************************************************/

import { View } from "../../types/view.class";

const args = {
    name: 'contract',
    template: `
    <div class="contract">
        <div class="contract-card content-card mdl-card mdl-shadow--2dp">
            <img class="contract-card-image" src="https://picsum.photos/600/100">
            <div class="mdl-card__title mdl-card--expand">
                <h2 class="mdl-card__title-text">[[name]]</h2>
            </div>
            <div class="mdl-card__supporting-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aenan convallis.
            </div>
            <div class="mdl-card__actions mdl-card--border">
                {if(model.date === null){<a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" onclick="window.deckrApp.setContract([[id]], true)">View & Sign</a>}}
                {if(model.date !== null){<a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Signed on [[date]]</a><span class="reset-contract" onclick="window.deckrApp.setContract([[id]], false)">unsign</span>}}
            </div>
        </div>
    </div>
    `,
    anchorElementId: 'contracts-content'
}

export const contractView = new View(args.name, args.template, args.anchorElementId);
