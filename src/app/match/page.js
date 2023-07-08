"use client"
import EventLogger from "./components/EventLogger"
import MatchDetails from "./components/MatchDetails"
import { useEffect, useState } from "react"

export default function Match() {
    //Create temporary state for the match. This will be updated when the user logs an action.
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

    //We only want to fetch the matches once during a render. Without a useEffect we will get an infinite loop of requests.
    useEffect(() => {
        fetchMatch();
    }, []);

    //This function will be passed to the components. When the user logs or deletes an event, the match will be updated.
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