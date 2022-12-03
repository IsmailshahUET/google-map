import React, {useContext, useState} from "react";

const mainContext = React.createContext();

export function useMainContext(){
    return useContext(mainContext);
}

export function ContextProvider({children}){
    //all of data from NASA EONET
    const [eventData, setEventData] = useState([]);
    //used to store data that use can go to
    const [selectedEvent, setSelectedEvent] = useState(null);
    //Need to re-render markers because user has changed filter option
    const [reRenderMakers, setReReMakers] = useState(null);

    const value ={
        eventData,
        setEventData,
        selectedEvent,
        setSelectedEvent,
        reRenderMakers,
        setReReMakers,
    }

    return(
        <mainContext.Provider value={value}>
            {children}
        </mainContext.Provider>
    )
}