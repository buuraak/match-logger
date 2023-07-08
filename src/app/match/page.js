"use client"
import EventLogger from "./components/EventLogger"
import MatchDetails from "./components/MatchDetails"
import { useEffect, useState } from "react"

export default function Match() {
    const [match, setMatch] = useState({
        goalsHome: 0,
        goalsAway: 0,
        actions: [],
    });
    
    const fetchMatch = async () => {
        const response = await fetch('/api/getMatches');
        const data = await response.json();
        setMatch(data.data);
    }

    //We willen de matches maar 1x ophalen tijdens een render. Zonder een useEffect krijgen we een oneindige loop van requests. 
    useEffect(() => {
        fetchMatch();
    }, []);

    //Deze functie wordt doorgegeven aan de components hier beneden. Wanneer er een actie wordt gelogd, willen we de match updaten.
    const updateMatch = () => {
        fetchMatch();
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <EventLogger updateMatch={updateMatch} />
            <MatchDetails updateMatch={updateMatch} actions={match.actions} match={match} />
        </div>
    )
}