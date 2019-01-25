import { View } from '../types/view.class';
import { headerView } from "./views/header";
import { footerView } from "./views/footer";
import { mainView } from './views/main';
import { registerView } from './views/register';
import { trainingView } from './views/training';
import { trainingsView } from './views/trainings';
import { loginView } from './views/login';
import { dashboardView } from './views/dashboard';

export const views = {
    header: headerView,
    footer: footerView,
    main: mainView,
    register: registerView,
    training: trainingView,
    trainings: trainingsView,
    login: loginView,
    dashboard: dashboardView
}
