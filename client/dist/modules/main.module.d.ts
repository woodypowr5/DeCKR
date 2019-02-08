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
    navigate(viewName: string): void;
    login(): void;
    logout(): void;
    verifyTrainingComplete(trainingId: string): void;
    resetTraining(trainingId: string): void;
    setContract(contractId: string, sign: boolean): void;
}
