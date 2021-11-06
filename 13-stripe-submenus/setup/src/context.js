import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = new React.createContext();

export const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);
    const [page, setPage] = useState({ page: '', links: [] })
    const [coord, setCoord] = useState({});
    const openSidebar = () => { setIsSidebarOpen(true) };
    const closeSidebar = () => { setIsSidebarOpen(false) };
    const openSubmenu = (text, coord) => {
        console.log(text, coord);
        console.log(sublinks.find(a => { console.log(a.page); console.log(text);return a.page === text }));
        let links = sublinks.find(a => a.page === text);
        console.log(links)
        setPage(links);
        setCoord(coord);
        setIsSubmenuOpen(true)
    };
    const closeSubmenu = () => { setIsSubmenuOpen(false) };
    

    return (
        <AppContext.Provider value = {{
            isSidebarOpen,
            isSubmenuOpen,
            openSidebar,
            openSubmenu,
            closeSidebar,
            closeSubmenu,
            page,
            coord
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}
export {AppContext}