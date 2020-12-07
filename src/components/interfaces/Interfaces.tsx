interface ITransaction {
    title: string;
    icon_url: string;
    date: string;
    amoutn: string;
}

export type UserRawType = {
    card_number: number;
    type: string;
    cardholder_name: string;
    valid: string;
    balance: number;
    transaction_history: ITransaction[];
}

export type UserType = {
    cardNumber: number;
    type: string;
    cardholder: string;
    valid: string;
    balance: number;
    transaction: ITransaction[];
}

export type HistoryItemType = {
    icon_url: string;
    title: string;
    date: string;
    amount: number;
}

export type DataContextType = {
    users: Object[];
    valute: Number[];
    loading: boolean;
    currentUser: number;
    currentValute: number;
    changeCard: boolean;
    setChangeCard: any;
    setCurrentValute: any;
    setCurrentUser: any;
    setLoading: any;
    changeBalance: any;
    changeHistoryItemAmount: any ;
}
