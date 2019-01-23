import { Signature } from "./signature.interface";

export interface Contract {
    id: number;
    name: string;
    signature: Signature;
}