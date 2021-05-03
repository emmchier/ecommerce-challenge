import React, { useEffect, useState } from 'react';
import { getUser } from './api/service';
import { UserContext } from './components/contexts/UserContext';
import { AppRouter } from './router/AppRouter';

export const RedeemUp = () => {

    const [user, setUser] = useState({});

    useEffect(() => {
        getUser(setUser);
    }, []);

    return (
      <UserContext.Provider value={ { user, setUser } }>
          <AppRouter />
      </UserContext.Provider>
    )
}
