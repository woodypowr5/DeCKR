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
        this.renderModule.renderView('header', {});
        this.renderModule.renderView('main', {});
        this.renderModule.renderView('footer', {});
        this.renderModule.renderView('register', {});
    }

    navigate(viewName: string): void {
        this.renderModule.renderView(viewName, this.userInfo);
    }

    login() {
        var username = (<HTMLInputElement>document.getElementById('textfield_login_username')).value;
        var password = (<HTMLInputElement>document.getElementById('textfield_login_password')).value;
        this.loggedInUserId = this.authModule.login(username, password);
        if (this.authModule.isAuthenticated(this.loggedInUserId)) {
            this.dataAccessModule.fetchUserInfo(this.loggedInUserId).then((newUserInfo) => {
                this.userInfo = newUserInfo;
                this.renderModule.renderView('dashboard', this.userInfo);
            });
        } else {
            this.renderModule.renderView('login', { 
                error: 'No account found with these credentials' 
            });
        }
    }

    logout() {
        this.loggedInUserId = undefined;
        this.userInfo = undefined;
        this.renderModule.renderView('register', {});
    }

    verifyTrainingComplete(trainingId: string): void {
        this.dataAccessModule.setTrainingStatus('Current', this.loggedInUserId, trainingId).then( newUserInfo => {
            this.userInfo = newUserInfo;
            this.renderModule.renderView('trainings', this.userInfo);
        });
        
    }

    resetTraining(trainingId: string): void {
        this.dataAccessModule.setTrainingStatus('Due', this.loggedInUserId, trainingId).then( newUserInfo => {
            this.userInfo = newUserInfo;
            this.renderModule.renderView('trainings', this.userInfo);
        });   
    }

    setContract(contractId: string, sign: boolean): void {
        this.dataAccessModule.setContract(this.loggedInUserId, contractId, sign).then( newUserInfo => {
            this.userInfo = newUserInfo;
            this.renderModule.renderView('contracts', this.userInfo);
        });   
    }
}
