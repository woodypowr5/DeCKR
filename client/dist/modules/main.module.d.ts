import { RenderModule } from "./render.module";
import { AuthModule } from "./auth.module";
import { DataAccessModule } from "./dataAccess.module";
import { UserInfo } from "../types/userInfo.interface";
export declare class MainModule {
    loggedInUserId: string;
    userInfo: UserInfo;
    renderModule: RenderModule;
    authModule: AuthModule;
    dataAccessModule: DataAccessModule;
    constructor();
    initialize(): void;
    navigateLogin(): void;
    navigateDashboard(): void;
    navigateTrainings(): void;
    navigateContracts(): void;
    navigateSecurityGroups(): void;
    login(): void;
    logout(): void;
}
