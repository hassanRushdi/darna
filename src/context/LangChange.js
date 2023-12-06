import Cookies from 'js-cookie';
import React, { createContext, useEffect, useState } from 'react';
export const LocalizationContext = createContext([])

function LangChange({ children }) {

  const [isLang, setIsLang] = useState(Cookies.get('i18next'));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Cookies.set('i18next', isLang)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [isLang])
  return (
    <LocalizationContext.Provider value={{ loading, setLoading, isLang, setIsLang }}>
      {children}
    </LocalizationContext.Provider>
  )
}

export default LangChange