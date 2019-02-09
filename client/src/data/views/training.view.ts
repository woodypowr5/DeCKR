/*****************************************************
* Name: Chris Woodward                               *
* Date: 02/08/2019                                   *
* Course: SEN632                                     *
* Assigment: Project                                 *
* Instructor:  James Garrova                         *
******************************************************/

import { View } from "../../types/view.class";

const args = {
    name: 'training',
    template: `
        <div class="training">
            <div class="training-card content-card mdl-card mdl-shadow--2dp">
                <img class="training-card-image" src="https://picsum.photos/600/100">
                <div class="mdl-card__title mdl-card--expand">
                    <h2 class="mdl-card__title-text">[[name]]</h2>
                </div>
                <div class="mdl-card__supporting-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </div>
                <div class="mdl-card__actions mdl-card--border">
                    {if(model.status === null){<a class="training-status-wrapper mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Status:  <span class="incomplete-training-status"></span></a><div class="mdl-spinner mdl-js-spinner is-active"></div>}}
                    {if(model.status === 'OverDue' || model.status === 'Due'){<a class="training-status-wrapper mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Status:  <span class="incomplete-training-status">[[status]]</span></a>}}
                    {if(model.status === 'Current'){<a class="training-status-wrapper mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Status:  <span class="complete-training-status">[[status]]</span></a><span class="reset-training" onclick="window.deckrApp.resetTraining([[id]])">reset</span>}}
                    {if(model.status !== 'Current'){<button class="mdl-button mdl-js-button mdl-button--raised" onclick="window.deckrApp.verifyTrainingComplete([[id]])">Verify Complete</button>}}
                </div>
            </div>
        </div>
    `,
    anchorElementId: 'trainings-content'
}

export const trainingView = new View(args.name, args.template, args.anchorElementId);
