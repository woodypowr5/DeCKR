import { SecurityGroup } from "./securityGroup.interface";
import { Training } from "./training.interface";
import { Contract } from "./contract.interface";

export interface UserInfo {
    name: string;
    securityGroups: SecurityGroup[];
    trainings: Training[];
    contracts: Contract[];
    jobPosition: string;
    department: string;
    address: string;
    DOB: Date;
    SSN: number;
    bankInfo: string;
    highestEductation: string;
    prevEmployment: string;
}