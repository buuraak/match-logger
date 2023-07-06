export default function ActionLogger() {
    return (
        <div className="h-[700px] w-auto grid grid-cols-2 bg-white rounded-xl shadow-lg">
            <div className="text-black h-full border-r">
                <div className="h-1/2">
                    <p className="text-2xl font-extrabold border-b pl-8 py-5 rounded-tl-xl hover:bg-primary hover:text-white duration-100">Doelpunt</p>
                    <p className="text-2xl font-extrabold border-b pl-8 py-5 hover:bg-primary hover:text-white duration-100">Gele kaart</p>
                    <p className="text-2xl font-extrabold border-b pl-8 py-5 hover:bg-primary hover:text-white duration-100">Rode kaart</p>
                    <p className="text-2xl font-extrabold border-b pl-8 py-5 hover:bg-primary hover:text-white duration-100">Groene kaart</p>
                    <p className="text-2xl font-extrabold border-b pl-8 py-5 hover:bg-primary hover:text-white duration-100">Penalty</p>
                </div>
                <div className="h-1/2 flex justify-center items-end pb-9">
                    <p className="font-extrabold text-2xl opacity-20 text-center">THUIS</p>
                </div>
            </div>
            <div className="text-black text-right h-full">
                <div className="h-1/2">
                    <p className="text-2xl font-extrabold rounded-tr-xl border-b pr-8 py-5 hover:bg-primary hover:text-white duration-100">Doelpunt</p>
                    <p className="text-2xl font-extrabold border-b pr-8 py-5 hover:bg-primary hover:text-white duration-100">Gele kaart</p>
                    <p className="text-2xl font-extrabold border-b pr-8 py-5 hover:bg-primary hover:text-white duration-100">Rode kaart</p>
                    <p className="text-2xl font-extrabold border-b pr-8 py-5 hover:bg-primary hover:text-white duration-100">Groene kaart</p>
                    <p className="text-2xl font-extrabold border-b pr-8 py-5 hover:bg-primary hover:text-white duration-100">Penalty</p>
                </div>
                <div className="h-1/2 flex justify-center items-end pb-9">
                    <p className="font-extrabold text-2xl opacity-20 text-center">UIT</p>
                </div>
            </div>
        </div>
    )
}