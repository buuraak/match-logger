import ActionLogger from "./components/ActionLogger"
import MatchDetails from "./components/MatchDetails"

export default function Match() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <ActionLogger />
            <MatchDetails />
        </div>
    )
}