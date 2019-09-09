import React from 'react';
import UIContextProvider from './UIContext';

const Providers : React.FC = (props)=>{
    return(
        <UIContextProvider>
            {props.children}
        </UIContextProvider>
    );
}