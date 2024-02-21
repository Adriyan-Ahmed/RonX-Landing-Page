// --------------------------- //
// --Imported Files & Hooks -- //
// --------------------------- //

import { createContext, useContext, useState } from 'react';





const ScrollContext = createContext();




export const useScrollContext = () => {

    return useContext(ScrollContext);
    
};




const ScrollProvider = ({ children }) => {

    const [section, setSection] = useState(false)

    const [scrollToContent, setScrollToContent] = useState(false)


    const scrollToContentHandler = (sectionId) => {

        setSection(sectionId)

        setScrollToContent(true)

    };





    const contextValue = {

        section,

        scrollToContent,

        setScrollToContent,

        scrollToContentHandler,

        setSection,

    };




    return (
        <ScrollContext.Provider value={contextValue}>
            {children}
        </ScrollContext.Provider>
    );
};

export default ScrollProvider;