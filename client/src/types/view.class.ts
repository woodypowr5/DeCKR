export class View {
    private name: string;
    private template: string;
    private anchorElementId: string
    private model: Object;

    constructor(name: string, template: string, anchorElementId: string) {
        this.name = name;
        this.template = template;
        this.anchorElementId = anchorElementId;
    }

    populateTemplate(view: View, scope: Object) {

    }

    render(model: Object) {
        console.log('rendering ' + this.name + ' with data model: ');
        console.log(model);
    }
}