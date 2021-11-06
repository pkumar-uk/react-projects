import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [issidebaropen, setIssidebaropen] = useState(false);
    const [ ismodalopen, setIsmodalopen] = useState(false);
    const openSidebar = () => { setIssidebaropen(true) }
    const closeSidebar = () => { setIssidebaropen(false) }
    const openModal = () => { setIsmodalopen(true) }
    const closeModal = () => { setIsmodalopen(false) }
    return (
        <AppContext.Provider
            value={{
                ismodalopen,
                openModal,
                closeModal,
                issidebaropen,
                openSidebar,
                closeSidebar
            }}>{ children }</AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
  };
  
export { AppContext, AppProvider };