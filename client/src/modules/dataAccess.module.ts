import { UserInfo } from "../types/userInfo.interface";
import { mockData } from "../data/mockData";

export class DataAccessModule {

    constructor() {
        
    }

    fetchUserInfo(userId: string): Promise<UserInfo> {
        const userInfo: UserInfo = mockData.userInfo; 
        const promise = new Promise<UserInfo>((resolve, reject) => {
            setTimeout(function(){ 
                resolve(userInfo); 
            }, 1000);
        });  
        return promise;
    }

    setPassword() {

    }

    setTrainingStatus() {

    }

    signContract() {

    }
}