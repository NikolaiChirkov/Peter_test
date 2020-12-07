import React, { useState, useContext, useEffect } from 'react';

const DataContext = React.createContext(null);

const DataProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(0);
    const [valute, setValute] = useState({});
    const [currentValute, setCurrentValute] = useState('GBP');
    const [loading, setLoading] = useState(true);
  
    const fetchUsers = async() => {
        setLoading(true);

        try {
            const response = await fetch('https://hr.peterpartner.net/test/android/v1/users.json');
            const { users } = await response.json();
  
            if (users) {
                const newUsers = users.map(user => {
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
                const { GBP, USD, EUR } = Valute;
                const newValute = { gbp: GBP, usd: USD, eur: EUR };
                setValute(newValute);
            } else {
                setValute({});
            }
        } catch(error) {
            console.error(error);
        }
        setLoading(false);
    }
    
    useEffect(() => {
      fetchUsers();
      fetchValute();
    }, []);

    console.log(users);
    console.log(valute);

    return (
        <DataContext.Provider value={{
            users,
            valute,
            loading,
            currentUser,
            setLoading
        }}>
            {children}
        </DataContext.Provider>
    )
}

export const useDataContext = () => {
    return useContext(DataContext);
}

export { DataContext, DataProvider }