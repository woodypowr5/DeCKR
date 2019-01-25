import { View } from "../../types/view.class";

const args = {
    name: 'contract',
    template: `
        <div class="contract">
            <h3>Contract: [[name]]</h3>
        </div>
    `,
    anchorElementId: 'contracts-content'
}

export const contractView = new View(args.name, args.template, args.anchorElementId);
