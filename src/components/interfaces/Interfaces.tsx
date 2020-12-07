import React from 'react';
import { Interface } from 'readline';

interface ITransaction {
    title: string;
    icon_url: string;
    date: string;
    amoutn: string;
}

type IUser = {
    cardNumber: number;
    type: string;
    cardholder: string;
    valid: string;
    balance: number;
    transaction: ITransaction[];
}

export { IUser }; 
