import { Bank } from "./bank";

export interface BankOffres{
     idBankOffer: number;
     nameBankoffer: string;
	   descriptionBankOffer: string;
	   gracePeriod :string;
	 selfFinancing:number;
	 maxCredit:number;
     period:number;
	 bank :Bank;

}
