import { View } from "../../types/view.class";

const args = {
    name: 'training',
    template: `
        <div class="training">
            <div class="training-card mdl-card mdl-shadow--2dp">
                <img class="training-card-image" src="https://picsum.photos/600/100">
                <div class="mdl-card__title mdl-card--expand">
                    <h2 class="mdl-card__title-text">[[name]]</h2>
                </div>
                <div class="mdl-card__supporting-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </div>
                <div class="mdl-card__actions mdl-card--border">
                    {if(model.status === 'incomplete'){<a class="training-status-wrapper mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Status:  <span class="incomplete-training-status">[[status]]</span></a>}}
                    {if(model.status === 'complete'){<a class="training-status-wrapper mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Status:  <span class="complete-training-status">[[status]]</span></a>}}
                    {if(model.status === 'incomplete'){<button class="mdl-button mdl-js-button mdl-button--raised" onclick="window.deckrApp.verifyTrainingComplete([[id]])">Verify Complete</button>}}
                </div>
            </div>
        </div>
    `,
    anchorElementId: 'trainings-content'
}

export const trainingView = new View(args.name, args.template, args.anchorElementId);
