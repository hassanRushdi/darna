import React, { createContext, useContext, useState } from 'react';
import { LocalizationContext } from './LangChange';
export const FetchDataContext = createContext([])

function FetchData({ children }) {

    let { isLang } = useContext(LocalizationContext)


    const [loader, setLoading] = useState(false);


    // *********************************************** Products   


    return (
        <FetchDataContext.Provider value={{
            loader,
            setLoading
        }}>
            {children}
        </FetchDataContext.Provider>
    )
}

export default FetchData    