import { RenderModule } from "./render.module";
import { AuthModule } from "./auth.module";
import { views } from '../data/views';
import { DataAccessModule } from "./dataAccess.module";
import { UserInfo } from "../types/userInfo.interface";

export class MainModule {
    loggedInUserId: string;
    userInfo: UserInfo;
    renderModule: RenderModule = new RenderModule();
    authModule: AuthModule = new AuthModule();
    dataAccessModule: DataAccessModule = new DataAccessModule();

    constructor() {
        this.initialize();
    }

    initialize() {
        console.log("MainModule: initialize()");
        this.renderModule.renderView('header', {});
        this.renderModule.renderView('main', {});
        this.renderModule.renderView('footer', {});
        this.renderModule.renderView('register', {});
    }

    navigateLogin() {
        this.renderModule.renderView('login', {});
    }

    navigateDashboard() {
        this.renderModule.renderView('dashboard', {});
    }

    navigateTrainings() {
        this.renderModule.renderView('trainings', this.userInfo);
    }

    navigateContracts() {
        this.renderModule.renderView('contracts', this.userInfo);
    }

    navigateSecurityGroups() {
        this.renderModule.renderView('securityGroups',  this.userInfo);
    }

    login() {
        this.loggedInUserId = this.authModule.login('chris', 'password');
        if (this.authModule.isAuthenticated(this.loggedInUserId)) {
            this.dataAccessModule.fetchUserInfo(this.loggedInUserId).then((newUserInfo) => {
                this.userInfo = newUserInfo;
                this.renderModule.renderView('dashboard', {});
            })
        } else {
            this.renderModule.renderView('login', { 
                error: 'invalidLogin' 
            });
        }
    }

    logout() {

    }
}
