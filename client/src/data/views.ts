/*****************************************************
* Name: Chris Woodward                               *
* Date: 02/08/2019                                   *
* Course: SEN632                                     *
* Assigment: Project                                 *
* Instructor:  James Garrova                         *
******************************************************/

import { View } from '../types/view.class';
import { headerView } from "./views/header.view";
import { footerView } from "./views/footer.view";
import { mainView } from './views/main.view';
import { registerView } from './views/register.view';
import { trainingView } from './views/training.view';
import { trainingsView } from './views/trainings.view';
import { loginView } from './views/login.view';
import { dashboardView } from './views/dashboard.view';
import { contractsView } from './views/contracts.view';
import { securityGroupsView } from './views/securityGroups.view';
import { securityGroupView } from './views/securityGroup.view';
import { contractView } from './views/contract.view';
import { changePasswordView } from './views/changePassword.view';

export const views = {
    header: headerView,
    footer: footerView,
    main: mainView,
    register: registerView,
    training: trainingView,
    trainings: trainingsView,
    login: loginView,
    dashboard: dashboardView,
    contracts: contractsView,
    contract: contractView,
    securityGroups: securityGroupsView,
    securityGroup: securityGroupView,
    changePassword: changePasswordView
}
