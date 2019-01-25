import { View } from "../types/view.class";
import { views } from "../data/views";

export class RenderModule {
    views = views;
    
    constructor() {
        
    }

    renderView(viewName: string, data: Object) {    
        const view: View = this.views[viewName];
        view.render(data);
    }    
}