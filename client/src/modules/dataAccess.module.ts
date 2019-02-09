/*****************************************************
* Name: Chris Woodward                               *
* Date: 02/08/2019                                   *
* Course: SEN632                                     *
* Assigment: Project                                 *
* Instructor:  James Garrova                         *
******************************************************/

import { UserInfo } from "../types/userInfo.interface";
import { mockData } from "../data/mockData";
import { Contract } from "../types/contract.interface";
import { Training } from "../types/training.interface";
import { SecurityGroup } from "../types/securityGroup.interface";

export class DataAccessModule {
    private userInfo: UserInfo;
    private api: string = 'http://sen632webapi.gear.host/api';
    constructor() {}

    fetchUserInfo(userId: string): Promise<UserInfo>{ 
        let userInfo: UserInfo;
        let getUser = this.makeRequest('GET', this.api + '/user/' + userId);
        let getUserContracts = this.makeRequest('GET', this.api + '/contract/' + userId);
        let getUserTrainings = this.makeRequest('GET', this.api + '/Training/' + userId);
        let getUserSecurityGroups = this.makeRequest('GET', this.api + '/SecurityGroup/' + userId);

        return new Promise<UserInfo>((resolve, reject) => {
            Promise.all([getUser, getUserTrainings, getUserContracts, getUserSecurityGroups]).then( values => {
                const [user, trainings, contracts, securityGroups] = values;
                userInfo = {
                    id: user.UserId,
                    name: user.Name,
                    securityGroups: this.processSecurityGroups(securityGroups),
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
            return {
                id: contract.Id,
                name: contract.Name,
                date: contract.Date,
            }
        });
    }

    private processSecurityGroups(securityGroups: any): SecurityGroup[] {
        return securityGroups.map( securityGroup => {
            return {
                id: securityGroup.SecurityGroup.Id,
                description: securityGroup.SecurityGroup.Description,
                name: securityGroup.SecurityGroup.Name
            }
        });
    }

    private makeRequest(restVerb: string, url: string): Promise<any> {
        let xhr = new XMLHttpRequest();
        return new Promise<any>((resolve, reject) => {
            xhr.open(restVerb, url);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(null);
            xhr.onreadystatechange = () => {
                var DONE = 4;
                var OK = 200;
                if (xhr.readyState === DONE) {
                    if (xhr.status === OK) 
                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        if(xhr.status === 204) {
                            resolve();
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

    setContract(userId: string, contractId: string, sign: boolean) {
        return new Promise<any>((resolve, reject) => {
            let setContract = this.makeRequest('POST', this.api + '/contract/post?Id=' + userId + '&contractId=' + contractId + '&sign=' + sign).then( data => {
                this.fetchUserInfo(this.userInfo.id).then( newUserInfo => {
                    resolve(newUserInfo);
                });
            });
        });      
    }
}