export default function ActionLogger() {

    const logHandler = async (e) => {
        let team;
        let card;
        const actionType = e.target.dataset.type;

        if (e.target.dataset.team === "home") {
            team = "home"
        } else {
            team = "away"
        }
        try {
            switch (actionType) {
                case "goal":
                    await fetch('/api/ActionLogger', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ "team": team, "actionType": actionType })
                    })
                    break;
                case "card":
                    if (e.target.dataset.card === "yellow") {
                        card = "Gele kaart"
                    } else if (e.target.dataset.card === "red") {
                        card = "Rode kaart"
                    } else {
                        card = "Groene kaart"
                    }

                    await fetch('/api/ActionLogger', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ "team": team, "card": card, "actionType": actionType })
                    })
                    break;
                case "penalty":
                    await fetch('/api/ActionLogger', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ "team": team, "actionType": actionType })
                    })
                    break;
            }
        } catch (error) {
            console.log(`Error at : ${actionType} ${error}`)
        }
    }
    return (
        <div className="h-[700px] w-auto grid grid-cols-2 bg-white rounded-xl shadow-lg">
            <div className="text-black h-full border-r">
                <div className="h-1/2">
                    <p onClick={logHandler} data-type="goal" data-team="home" className="text-2xl font-extrabold border-b pl-8 py-5 rounded-tl-xl hover:bg-primary hover:text-white duration-100">Doelpunt</p>
                    <p onClick={logHandler} data-type="card" data-card="yellow" data-team="home" className="text-2xl font-extrabold border-b pl-8 py-5 hover:bg-primary hover:text-white duration-100">Gele kaart</p>
                    <p onClick={logHandler} data-type="card" data-card="red" data-team="home" className="text-2xl font-extrabold border-b pl-8 py-5 hover:bg-primary hover:text-white duration-100">Rode kaart</p>
                    <p onClick={logHandler} data-type="card" data-card="green" data-team="home" className="text-2xl font-extrabold border-b pl-8 py-5 hover:bg-primary hover:text-white duration-100">Groene kaart</p>
                    <p onClick={logHandler} data-type="penalty" data-team="home" className="text-2xl font-extrabold border-b pl-8 py-5 hover:bg-primary hover:text-white duration-100">Penalty</p>
                </div>
                <div className="h-1/2 flex justify-center items-end pb-9">
                    <p className="font-extrabold text-2xl opacity-20 text-center">THUIS</p>
                </div>
            </div>
            <div className="text-black text-right h-full">
                <div className="h-1/2">
                    <p onClick={logHandler} data-type="goal" data-team="away" className="text-2xl font-extrabold rounded-tr-xl border-b pr-8 py-5 hover:bg-primary hover:text-white duration-100">Doelpunt</p>
                    <p onClick={logHandler} data-type="card" data-card="yellow" data-team="away" className="text-2xl font-extrabold border-b pr-8 py-5 hover:bg-primary hover:text-white duration-100">Gele kaart</p>
                    <p onClick={logHandler} data-type="card" data-card="red" data-team="away" className="text-2xl font-extrabold border-b pr-8 py-5 hover:bg-primary hover:text-white duration-100">Rode kaart</p>
                    <p onClick={logHandler} data-type="card" data-card="green" data-team="away" className="text-2xl font-extrabold border-b pr-8 py-5 hover:bg-primary hover:text-white duration-100">Groene kaart</p>
                    <p onClick={logHandler} data-type="penalty" data-team="away" className="text-2xl font-extrabold border-b pr-8 py-5 hover:bg-primary hover:text-white duration-100">Penalty</p>
                </div>
                <div className="h-1/2 flex justify-center items-end pb-9">
                    <p className="font-extrabold text-2xl opacity-20 text-center">UIT</p>
                </div>
            </div>
        </div>
    )
}
