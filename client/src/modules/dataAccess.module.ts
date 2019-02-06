import { UserInfo } from "../types/userInfo.interface";
import { mockData } from "../data/mockData";
import { Contract } from "../types/contract.interface";
import { Training } from "../types/training.interface";

export class DataAccessModule {
    private userInfo: UserInfo;
    private api: string = 'http://sen632webapi.gear.host/api';

    constructor() {}

    fetchUserInfo(userId: string): Promise<UserInfo>{ 
        let userInfo: UserInfo;
        let getUser = this.makeRequest('GET', this.api + '/user/' + userId);
        let getUserContracts = this.makeRequest('GET', this.api + '/contract/' + userId);
        let getUserTrainings = this.makeRequest('GET', this.api + '/Training/' + userId);

        return new Promise<UserInfo>((resolve, reject) => {
            Promise.all([getUser, getUserTrainings, getUserContracts]).then( values => {
                const [user, trainings, contracts] = values;
                userInfo = {
                    id: user.UserId,
                    name: user.Name,
                    securityGroups: trainings,
                    trainings: this.processTrainings(trainings),
                    contracts: this.processContracts(contracts),
                    jobPosition: user.JobTitle,
                    department: user.DepartmentId,
                    address: user.Address,
                    DOB: user.DOB,
                    SSN: user.SSN,
                    bankInfo: user.BankInfo,
                    highestEductation: user.Education,
                    prevEmployment: user.Employment
                }
                this.userInfo = userInfo;
                resolve(userInfo);
            }); 
        });
    }

    private processTrainings(trainings: any): Training[] {
        return trainings.map( training => {
            return {
                id: training.Id,
                name: training.Name,
                status: training.Status,
                date: training.Date,
            }
        });
    }

    private processContracts(contracts: any): Contract[] {
        return contracts.map( contract => {
            console.log(contract);
            return {
                id: contract.Id,
                name: contract.Name,
                date: contract.Date,
            }
        });
    }

    private makeRequest(restVerb: string, url: string): Promise<any> {
        let xhr = new XMLHttpRequest();
        return new Promise<any>((resolve, reject) => {
            xhr.open(restVerb, url);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(null);
            xhr.onreadystatechange =  () => {
                var DONE = 4;
                var OK = 200;
                if (xhr.readyState === DONE) {
                  if (xhr.status === OK) 
                    resolve(JSON.parse(xhr.responseText));
                  } else {
                    if(xhr.status === 204) {
                        resolve();
                    } else {
                        console.log('Error: ' + xhr.status);
                    }
                  }
            }
        });    
    }

    setTrainingStatus(newStatus: string, userId: string, trainingId: string): Promise<UserInfo> {
        return new Promise<any>((resolve, reject) => {
            let setTraining = this.makeRequest('POST', this.api + '/training/post?Id=' + userId + '&trainingId=' + trainingId + '&status=' + newStatus + '&completion=100').then( data => {
                this.fetchUserInfo(this.userInfo.id).then( newUserInfo => {
                    resolve(newUserInfo);
                });
            });
        });        
    }

    signContract(userId: string, contractId: string) {

    }

    setPassword(userId: string, pasword: string) {

    }
}