import React, { createContext, useState } from 'react';

interface IUIContext{
    isMenuOpen : boolean
}

export const UIContext = createContext<IUIContext>({
    isMenuOpen : false
});

const UIContextProvider :React.FC= (props)=>{
    const [isMenuOpen,toggleSideMenu] = useState(true)
    return(
        <UIContext.Provider 
            value={{
                isMenuOpen:isMenuOpen
            }}
        >
            {props.children}
        </UIContext.Provider>
    );
}

export default UIContextProvider
