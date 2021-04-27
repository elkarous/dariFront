import { BankOffres } from "./bankOffres";


export interface Bank{
    id: number;
    name:string;
    description:string;
    interestRate:number;
    bankOffres:BankOffres[];

}