import { UserInfo } from "../types/userInfo.interface";
export declare class DataAccessModule {
    private userInfo;
    private api;
    constructor();
    fetchUserInfo(userId: string): Promise<UserInfo>;
    private processTrainings;
    private processContracts;
    private processSecurityGroups;
    private makeRequest;
    setTrainingStatus(newStatus: string, userId: string, trainingId: string): Promise<UserInfo>;
    setContract(userId: string, contractId: string, sign: boolean): Promise<any>;
}
