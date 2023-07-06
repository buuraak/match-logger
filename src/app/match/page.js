"use client"
import ActionLogger from "./components/ActionLogger"
import MatchDetails from "./components/MatchDetails"
import { useEffect, useState } from "react"

export default function Match() {
    const [match, setMatch] = useState({
        goalsHome: 0,
        goalsAway: 0,
    });
    const [actions, setActions] = useState([{
        action: '',
        team: ''
    }]);

    useEffect(() => {
        const fetchMatch = async () => {
            const response = await fetch('/api/matches');
            const data = await response.json();
            setMatch(data.data);
        }
        fetchMatch();
    }, []);

    useEffect(() => {
        const fetchActions = async () => {
            const response = await fetch('/api/actions');
            const data = await response.json();
            setActions(data.data);
        }
        fetchActions();
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <ActionLogger />
            <MatchDetails actions={actions} match={match} />
        </div>
    )
}