export declare class View {
    private name;
    private template;
    private populatedTemplate;
    private anchorElementId;
    private anchorElement;
    private model;
    constructor(name: string, template: string, anchorElementId: string);
    render(model: Object): void;
    private setAnchorElement;
    private removeOldContent;
    private populateTemplate;
    private insertNewContent;
    private renderNestedElements;
}
