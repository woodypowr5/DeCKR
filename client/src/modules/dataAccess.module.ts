import { UserInfo } from "../types/userInfo.interface";
import { mockData } from "../data/mockData";

export class DataAccessModule {
    private userInfo: UserInfo;

    constructor() {}

    async fetchUserInfo(userId: string): Promise<UserInfo>{ 
        const userInfo: UserInfo = mockData.userInfo; 
        let data = await new Promise<UserInfo>((resolve, reject) => {
            setTimeout(function(){ 
                resolve(userInfo);
            }, 500);
        });  
        this.userInfo = data;
        return data;
    }

    async verifyTrainingComplete(userId: string, trainingId: string): Promise<UserInfo> {
        const userInfo: UserInfo = this.userInfo; 
        userInfo.trainings.filter( training => training.id === trainingId)[0].status = 'complete';
        let data = await new Promise<UserInfo>((resolve, reject) => {
            setTimeout(function(){ 
                resolve(userInfo);
            }, 500);
        });  
        this.userInfo = data;
        return data;
    }

    signContract(userId: string, contractId: string) {

    }

    setPassword(userId: string, pasword: string) {

    }
}