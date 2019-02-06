import { UserInfo } from "../types/userInfo.interface";
export declare class DataAccessModule {
    private userInfo;
    private api;
    constructor();
    fetchUserInfo(userId: string): Promise<UserInfo>;
    private processTrainings;
    private processContracts;
    private makeRequest;
    verifyTrainingComplete(userId: string, trainingId: string): Promise<UserInfo>;
    signContract(userId: string, contractId: string): void;
    setPassword(userId: string, pasword: string): void;
}
