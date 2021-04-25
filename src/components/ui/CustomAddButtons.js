import React from 'react';

import { Points } from '../user/Points';
import { CustomFAB } from './CustomFAB';

export const CustomAddButtons = ({ pointsAdd, onClickAdd }) => {

    return (
        <div className="sidenav-coins-container d-flex align-items-center">
            <Points 
                points={ pointsAdd }
                isHover={ false }
            />
            <CustomFAB 
                iconName={ 'add' }
                onClickFab={ onClickAdd }
            />
        </div>
    )
}
