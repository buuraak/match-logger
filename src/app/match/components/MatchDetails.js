import Timer from "./Timer"

export default function MatchDetails(props) {
    const match = props.match;
    const actions = props.actions;
    const updateMatch = props.updateMatch;

    const deleteAction = async (e) => {
        const id = e.currentTarget.dataset.id;
        const action = e.currentTarget.dataset.action;
        const team = e.currentTarget.dataset.team;
        try {
            await fetch('/api/deleteAction', {
                method: 'DELETE',
                body: JSON.stringify({ id: id, action: action, team: team })
            });
        } catch (error) {
            console.log(`Error at : ${action} ${error}`)
        }
        updateMatch();
    }

    return (
        <div className="h-[700px] w-[500px] text-black flex flex-col px-12">
            <h2 className="text-7xl font-extrabold text-center pb-5">{`${match.goalsHome} - ${match.goalsAway}`}</h2>
            <Timer startingTimestamp={match.startingTimestamp} lastTimestamp={match.lastTimestamp} status={match.status} />
            <div className="bg-black bg-opacity-5 rounded-xl h-full overflow-scroll">
                <ul className="font-extrabold pt-6 pl-8 list-none relative">
                    {actions && actions.map((action, index) => {
                        let classes;
                        if (actions.length > 1) {
                            classes = 'after:content-[\'\'] after:absolute after:left-0 after:top-0 after:border-l-2 after:border-color-[#CCD5E0] after:ml-[7px] after:h-full after:z-[-1] first:after:top-1/2 last:after:-top-1/2'
                        }
                        return (
                            <li key={action.id} className={`pb-4 flex items-center relative ${classes}`}>
                                <div className="w-4 h-4 border-2 bg-white border-blue-500 rounded-full mr-2"></div>
                                {`${action.action} ${action.team}`}
                                <div onClick={deleteAction} data-id={action.id} data-action={action.action} data-team={action.team} className="absolute right-6 cursor-pointer">
                                    <svg width="25px" height="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF006C">
                                        <path fillRule="evenodd" d="M2.515 10.674a1.875 1.875 0 000 2.652L8.89 19.7c.352.351.829.549 1.326.549H19.5a3 3 0 003-3V6.75a3 3 0 00-3-3h-9.284c-.497 0-.974.198-1.326.55l-6.375 6.374zM12.53 9.22a.75.75 0 10-1.06 1.06L13.19 12l-1.72 1.72a.75.75 0 101.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L15.31 12l1.72-1.72a.75.75 0 10-1.06-1.06l-1.72 1.72-1.72-1.72z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}