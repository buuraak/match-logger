import Timer from "./Timer"

export default function MatchDetails(props) {
    const match = props.match;
    const actions = props.actions;
    return (
        <div className="h-[700px] w-[500px] text-black flex flex-col px-12">
            <h2 className="text-7xl font-extrabold text-center pb-5">{`${match.goalsHome} - ${match.goalsAway}`}</h2>
            <Timer startingTimestamp={match.startingTimestamp} lastTimestamp={match.lastTimestamp} />
            <div className="bg-black bg-opacity-5 rounded-xl h-full overflow-scroll">
                <ul className="font-extrabold pt-6 pl-8 list-none relative">
                    {actions && actions.map((action, index) => {
                        let classes;
                        if (actions.length > 1) {
                            classes = 'after:content-[\'\'] after:absolute after:left-0 after:top-0 after:border-l-2 after:border-color-[#CCD5E0] after:ml-[7px] after:h-full after:z-[-1] first:after:top-1/2 last:after:-top-1/2'
                        }
                        return (
                            <li key={index} className={`pb-4 flex items-center relative ${classes}`}>
                                <div className="w-4 h-4 border-2 bg-white border-blue-500 rounded-full mr-2"></div>
                                {`${action.action} ${action.team}`}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}