import { MainModule } from './modules/main.module';
import './material/templateStyles.css';
import './styles.css';

window.deckrApp = new MainModule();

// get access to the browser Window instance:

declare global { 
    interface Window { deckrApp: any; }
}
window.deckrApp = window.deckrApp || {};