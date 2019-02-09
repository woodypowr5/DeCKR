/*****************************************************
* Name: Chris Woodward                               *
* Date: 02/08/2019                                   *
* Course: SEN632                                     *
* Assigment: Project                                 *
* Instructor:  James Garrova                         *
******************************************************/

import { trainingView } from "../data/views/training.view";
import { views } from "../data/views";
import { Contract } from "./contract.interface";

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

    render(model: any) {
        this.setAnchorElement();
        this.removeOldContent();
        this.populateTemplate(model);
        this.insertNewContent(this.populatedTemplate);

        if (this.name === 'trainings') {
            this.renderNestedElements(model, views.training);
        } else if (this.name === 'securityGroups') {
            this.renderNestedElements(model, views.securityGroup);
        } else if (this.name === 'contracts') {
            model.contracts.map(contract => {
                contract.signature == null ? contract.signatureDate = null : contract.signatureDate = contract.signature.date; 
            });
            this.renderNestedElements(model, views.contract);
        }
        this.closeNav();
    }

    private closeNav(): void {
        let nav = document.getElementById("nav");
        nav.classList.remove("is-visible");
        let obfuscator = document.getElementsByClassName("mdl-layout__obfuscator")[0];
        if(obfuscator) {
            obfuscator.classList.remove("is-visible");   
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
        if (this.anchorElement.tagName !== 'BODY' && this.name !== 'training' && this.name !== 'contract' && this.name !== 'securityGroup' ) {
            const element = document.getElementById(this.anchorElementId);
            while(element.firstChild){
                element.removeChild(element.firstChild);
            }
        } 
    }

    private populateTemplate(model: any): void { 
        let newTemplate = this.evaluateConditionalTokens(this.template, model);
        for (var attribute in model) {
            newTemplate = newTemplate.replace('[[' + attribute + ']]', model[attribute]); // pattern = [[attribute]]
            newTemplate = newTemplate.replace('undefined', '');
        }  
        this.populatedTemplate = newTemplate;  
    }

    private evaluateConditionalTokens(template: string, model: any): string {
        let ifTokenRegex = new RegExp(/\{if(.*)\{.*?\}\}/, 'g'); // pattern = {if(condition)}--HTMLcontent--}}
        let conditionalToken = template.match(ifTokenRegex);
        if (conditionalToken !== null && conditionalToken.length > 0) {
            let result = template.replace(ifTokenRegex, (token, clause) => {
                if (eval(clause) === true) {
                    let html = token.replace(/ *\{if\([^)]*\)\{ */g, "");
                    return html.replace("}}", "");
                }
            })
            if (result !== undefined) {
                return result;
            }
            return "";
        }
        return template;
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