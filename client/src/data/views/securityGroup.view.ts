import { View } from "../../types/view.class";

const args = {
    name: 'securityGroup',
    template: `
        <div class="group">
            <div class="group-card content-card mdl-card mdl-shadow--2dp">
                <img class="group-card-image" src="https://picsum.photos/600/100">
                <div class="mdl-card__title mdl-card--expand">
                    <h2 class="mdl-card__title-text">[[name]]</h2>
                </div>
                <div class="mdl-card__supporting-text">
                [[description]]
                </div>
            </div>
        </div>
    `,
    anchorElementId: 'security-groups-content'
}

export const securityGroupView = new View(args.name, args.template, args.anchorElementId);
