import { View } from '../types/view.class';
import { headerView } from "./views/header";
import { footerView } from "./views/footer";
import { mainView } from './views/main';
import { registerView } from './views/register';
import { trainingView } from './views/training';
import { trainingsView } from './views/trainings';

export const views = {
    header: headerView,
    footer: footerView,
    main: mainView,
    register: registerView,
    training: trainingView,
    trainings: trainingsView
}