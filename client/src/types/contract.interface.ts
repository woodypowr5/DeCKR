/*****************************************************
* Name: Chris Woodward                               *
* Date: 02/08/2019                                   *
* Course: SEN632                                     *
* Assigment: Project                                 *
* Instructor:  James Garrova                         *
******************************************************/

import { Signature } from "./signature.interface";

export interface Contract {
    id: number;
    name: string;
    signature: Signature;
}