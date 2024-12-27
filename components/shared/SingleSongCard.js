const SingleSongCard = () => {
    return(
        <div className="flex hover:bg-gray-400 p-2 cursor-pointer hover:bg-opacity-30">
            <div className="w-12 h-12 bg-cover bg-center" 
            style={{backgroundImage:`url("https://c.saavncdn.com/516/Pee-Loon-Lofi-Mix-Hindi-2022-20220609051000-500x500.jpg")`}}>

            </div>
            <div className="flex w-full">
                <div className="pl-4 flex flex-col justify-center items-start">
                    <div className="text-white font-bold cursor-pointer hover:underline">Pee Loon</div>
                    <div className="text-gray-400 text-xs cursor-pointer hover:underline">Mohit Chauhan</div>
                </div>
                <div className="w-1/6 flex justify-end items-center text-gray-400 text-sm">
                    <div>3:44</div>
                </div>
            </div>
        </div>
    );
};

export default SingleSongCard;