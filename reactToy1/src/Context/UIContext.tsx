import React, { createContext, useState } from 'react';

interface IUIContext{
    isMenuOpen : boolean,
    toggle:()=>void
}

export const UIContext = createContext<IUIContext>({
    isMenuOpen : false,
    toggle:()=>{}
});

const UIContextProvider :React.FC= (props)=>{
    const [isMenuOpen,toggleSideMenu] = useState(true)
    return(
        <UIContext.Provider 
            value={{
                isMenuOpen:isMenuOpen,
                toggle:()=>{toggleSideMenu(!isMenuOpen)}
            }}
        >
            {props.children}
        </UIContext.Provider>
    );
}

export default UIContextProvider
