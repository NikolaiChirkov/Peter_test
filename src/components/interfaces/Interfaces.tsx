interface ITransaction {
    title: string;
    icon_url: string;
    date: string;
    amoutn: string;
}

export type UserType = {
    card_number: number;
    type: string;
    cardholder_name: string;
    valid: string;
    balance: number;
    transaction_history: ITransaction[];
}

export type DataContextType = {
    DataProvider: React.FC<{}>
}


//     users: Object[];
//     valute: Number[];
//     loading: boolean;
//     currentUser: number;
//     currentValute: number;
//     changeCard: boolean;
//     setChangeCard: any;
//     setCurrentValute: any;
//     setCurrentUser: any;
//     setLoading: any;
//     changeBalance: any;
//     changeHistoryItemAmount: any ;
