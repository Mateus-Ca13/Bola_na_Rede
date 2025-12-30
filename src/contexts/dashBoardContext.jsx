import { createContext, useEffect, useState } from "react";
import { getMatchesList } from "../services/matches";

const dashboardContext = createContext();

const DashboardContextProvider = ({ children }) => {
    // Informações de partidas
    const [pageOffset, setPageOffset]= useState(0);
    const [matchesList, setMatchesList] = useState([]);
    const [ageFilter, setAgeFilter] = useState('NDA')
    const [gamemodeFilter, setGamemodeFilter] = useState('NDA')
    const [gamestyleFilter, setGamestyleFilter] = useState('NDA')
    const [priceFilter, setPriceFilter] = useState('NDA')
    const [searchFilter, setSearchFilter] = useState('')
    // Informações de ligas
    const [leagues, setLeagues] = useState([]);

    useEffect(()=>{

        async function fetchMatchesList (){
                const filters = {
                search: searchFilter,
                average_age: ageFilter,
                gamemode: gamemodeFilter,
                gamestyle: gamestyleFilter,
                price: priceFilter
            }
            const matchesFounded = await getMatchesList(pageOffset, 20, filters)
            setMatchesList(matchesFounded.data.existingMatches)
        }

        fetchMatchesList()
        

    },[ageFilter,gamemodeFilter,gamestyleFilter, priceFilter, searchFilter])


    

    return (
        <dashboardContext.Provider value={{ 
            pageOffset, setPageOffset,
            matchesList, setMatchesList, 
            searchFilter, setSearchFilter,
            ageFilter, setAgeFilter,
            gamemodeFilter, setGamemodeFilter,
            gamestyleFilter, setGamestyleFilter,
            priceFilter, setPriceFilter,
            leagues, setLeagues,
            
             }}>
            {children}
        </dashboardContext.Provider>
    );
};

export { dashboardContext, DashboardContextProvider }

