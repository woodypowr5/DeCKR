import { View } from "../../types/view.class";

const args = {
    name: 'training',
    template: `
        <div class="training">
            <h3>Training: [[name]]</h3>
        </div>
    `,
    anchorElementId: 'trainings-content'
}

export const trainingView = new View(args.name, args.template, args.anchorElementId);
