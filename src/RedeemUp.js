import React, { useEffect, useState } from 'react';
import { getUser } from './api/service';
import { FilterContext } from './components/contexts/FilterContext';
import { UserContext } from './components/contexts/UserContext';
import { AppRouter } from './router/AppRouter';

export const RedeemUp = () => {

    const [user, setUser] = useState({});
    const [filter, setFilter] = useState({});

    useEffect(() => {
        getUser(setUser);
    }, []);

    return (

      <UserContext.Provider value={ { user, setUser } }>
        <FilterContext.Provider value={ { filter, setFilter } }>
          <AppRouter />
        </FilterContext.Provider>
      </UserContext.Provider>

    )
}
