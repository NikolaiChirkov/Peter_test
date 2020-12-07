import React, { useState, useContext, useEffect } from 'react';
import { UserRawType, DataContextType } from '../interfaces/Interfaces';

const DataProvider: any = ({ children }: any) => {
    const [users, setUsers] = useState<Array<Object>>([]);
    const [currentUser, setCurrentUser] = useState<number>(0);
    const [valute, setValute] = useState<Array<number>>([]);
    const [currentValute, setCurrentValute] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);
    const [changeCard, setChangeCard] = useState<boolean>(false);
  
    const fetchUsers = async() => {
        setLoading(true);

        try {
            const response = await fetch('https://hr.peterpartner.net/test/android/v1/users.json');
            const { users } = await response.json();
  
            if (users) {
                const newUsers = users.map((user: UserRawType) => {
                    const {
                        card_number,
                        type,
                        cardholder_name,
                        valid,
                        balance,
                        transaction_history
                    } = user;
                    return {
                        cardNumber: card_number,
                        type: type,
                        cardholder: cardholder_name,
                        valid: valid,
                        balance: balance,
                        transaction: transaction_history
                    }
                });
  
                setUsers(newUsers);
            } else {
                setUsers([]);
                setLoading(false);
            }
            setLoading(false);
        } catch (error) {
           console.error(error);
        }
    }

    const fetchValute = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
            const { Valute } = await response.json();

            if (Valute) {
                const { GBP, EUR, USD } = Valute;
                const newValute = [
                        parseFloat(GBP.Value.toFixed(2)), 
                        parseFloat(EUR.Value.toFixed(2)), 
                        1, 
                        parseFloat(USD.Value.toFixed(2))
                    ];
                setValute(newValute);
            } else {
                setValute([]);
            }
        } catch(error) {
            console.error(error);
        }
        setLoading(false);
    }

    const changeBalance = (balance: number) => {
        const changeValute = valute[currentValute];
        const dollar = valute[3];
        const amount = parseFloat((balance * (dollar/changeValute)).toFixed(2));
        
        return(amount);
    }

    const changeHistoryItemAmount = (amount: number) => {
        const changeValute = valute[currentValute];
        const dollar = valute[3];
        const itemAmount = parseFloat((amount * (dollar/changeValute)).toFixed(2));

        return itemAmount
    }
    
    useEffect(() => {
      fetchUsers();
      fetchValute();
    }, []);

    return (
        <DataContext.Provider value={{
            users,
            valute,
            loading,
            currentUser,
            currentValute,
            changeCard,
            setChangeCard,
            setCurrentValute,
            setCurrentUser,
            setLoading,
            changeBalance,
            changeHistoryItemAmount
        }}>
            {children}
        </DataContext.Provider>
    )
}

const DataContext = React.createContext(DataProvider);

export const useDataContext = () => {
    return useContext(DataContext);
}

export { DataContext, DataProvider }