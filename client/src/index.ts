import { MainModule } from './modules/main.module';
import './material/templateStyles.css';
import './styles.css';


window.deckrApp = new MainModule();

declare global {
    interface Window { deckrApp: any; }
}

window.deckrApp = window.deckrApp || {};