import { View } from "../types/view.class";
export declare class RenderModule {
    views: {
        header: View;
        footer: View;
        main: View;
        register: View;
        training: View;
        trainings: View;
        login: View;
        dashboard: View;
    };
    constructor();
    renderView(viewName: string, data: Object): void;
}
