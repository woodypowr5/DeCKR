import { MainModule } from './modules/main.module';

window.deckrApp = new MainModule();

declare global {
    interface Window { deckrApp: any; }
}

window.deckrApp = window.deckrApp || {};