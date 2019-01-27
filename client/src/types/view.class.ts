import { trainingView } from "../data/views/training.view";
import { views } from "../data/views";

export class View {
    private name: string;
    private template: string;
    private populatedTemplate: string;
    private anchorElementId: string;
    private anchorElement: HTMLElement;
    private model: Object;

    constructor(name: string, template: string, anchorElementId: string) {
        this.name = name;
        this.template = template;
        this.anchorElementId = anchorElementId;   
    }

    render(model: Object) {
        console.log('rendering ' + this.name + ' with data model ');
        console.log(model);

        this.setAnchorElement();
        this.removeOldContent();
        this.populateTemplate(model);
        this.insertNewContent(this.populatedTemplate);

        if (this.name === 'trainings') {
            this.renderNestedElements(model, views.training);
        } else if (this.name === 'securityGroups') {
            this.renderNestedElements(model, views.securityGroup);
        } else if (this.name === 'contracts') {
            this.renderNestedElements(model, views.contract);
        }
    }

    private setAnchorElement() {
        let anchorElement: HTMLElement;
        if (this.anchorElementId) {
            anchorElement = document.getElementById(this.anchorElementId);
        } else {
            anchorElement = document.getElementsByTagName('body')[0];
        }
        this.anchorElement = anchorElement;
    }

    private removeOldContent(): void {
        if (this.anchorElement.tagName !== 'BODY' && this.name !== 'training') {
            const element = document.getElementById(this.anchorElementId);
            while(element.firstChild){
                element.removeChild(element.firstChild);
            }
        } 
    }

    private populateTemplate(model: Object): void {
        let newTemplate = this.template;
        for (var attribute in model) {
            newTemplate = newTemplate.replace('[[' + attribute + ']]', model[attribute]);
        }  
        this.populatedTemplate = newTemplate;  
    }

    private insertNewContent(content: string): void {
        this.anchorElement.innerHTML +=  content;
    }

    private renderNestedElements(model: Object, view: View): void {
        const collection: any[] = model[this.name];
        collection.map((instance, index) => {
            view.render(collection[index]);
        });
    }
}