import { View } from "../../types/view.class";

const args = {
    name: 'securityGroup',
    template: `
        <div class="security-group">
            <h3>Contract: [[name]]</h3>
        </div>
    `,
    anchorElementId: 'security-group-content'
}

export const securityGroupView = new View(args.name, args.template, args.anchorElementId);
