/*****************************************************
* Name: Chris Woodward                               *
* Date: 02/08/2019                                   *
* Course: SEN632                                     *
* Assigment: Project                                 *
* Instructor:  James Garrova                         *
******************************************************/

import { MainModule } from './modules/main.module';
import './material/templateStyles.css';
import './styles.css';

window.deckrApp = new MainModule();

// get access to the browser Window instance:

declare global { 
    interface Window { deckrApp: any; }
}
window.deckrApp = window.deckrApp || {};