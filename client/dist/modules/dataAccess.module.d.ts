import { UserInfo } from "../types/userInfo.interface";
export declare class DataAccessModule {
    constructor();
    fetchUserInfo(userId: string): Promise<UserInfo>;
    setPassword(): void;
    setTrainingStatus(): void;
    signContract(): void;
}
