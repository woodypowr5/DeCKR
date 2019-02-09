/*****************************************************
* Name: Chris Woodward                               *
* Date: 02/08/2019                                   *
* Course: SEN632                                     *
* Assigment: Project                                 *
* Instructor:  James Garrova                         *
******************************************************/

import { View } from "../../types/view.class";

const args = {
    name: 'footer',
    template: `
       </div>
    `,
    anchorElementId: ''
}

export const footerView = new View(args.name, args.template, args.anchorElementId);
