import { Icon } from "@iconify/react";
import IconText from "../components/shared/IconText";
import TextWithHover from "../components/shared/TextWithHover";
import SingleSongCard from "../components/shared/SingleSongCard";

const UploadSongComponent = () => {
    return (
        <div className="w-full h-full flex">
            <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-5">
            <div>
            <div className="logo p-5 w-full flex justify-start">
                        <Icon icon="logos:spotify" width="150" />
                </div>
                <div className="py-5">
                    <IconText iconName={"typcn:home"} text="Home" active={true} />
                    <IconText iconName={"tabler:search"} text="Search" active={true} />
                    <IconText iconName={"fluent:library-20-filled"} text="Library" active={true} />
                    <IconText iconName={"iconamoon:music-2-fill"} text="My Music" active={true} />
                </div>
                <div className="pt-5">
                    <IconText iconName={"icon-park-solid:add"} text="Create Playlist" active={true} />
                    <IconText iconName={"solar:chat-round-like-linear"} text="Liked Songs" active={true} />
                </div>
            </div>
            <div className="px-5 flex items-center justify-start cursor-pointer">
                <div className="border border-grey-1000 text-white w-2/5 flex px-2 py-1 rounded-full hover:border-white">
                    <Icon icon="flowbite:globe-solid" width="30" height="30" />
                    <div className="ml-2 text-l font-semibold">English</div>
                </div>
            </div>
            </div>

            <div className="h-full w-4/5 bg-app-black overflow-y-auto">
                <div className="navbar w-full h-1/10 bg-black bg-opacity-50 flex justify-end items-center">
                    <div className="w-1/2 flex h-full items-center">
                        <div className="w-3/5 flex justify-around">
                            <TextWithHover text={"Premium"} />
                            <TextWithHover text={"Support"} />
                            <TextWithHover text={"Download"} />
                            <div className="border-r border-white"></div>
                        </div>
                        <div className="w-2/5 flex items-center justify-around">
                            <TextWithHover text={"Upload Songs"} />
                            <div className="bg-white text-black h-14 w-14 rounded-full font-bold text-lg flex items-center justify-center curosr-pointer hover:bg-gray-300"> 
                                NB
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content p-8 pt-5 ovrflow-y-auto text-white">
                    <div className="text-2xl font-bold pb-5">My Songs</div>
                    <div className="space-y-2">
                        <SingleSongCard />
                        <SingleSongCard />
                        <SingleSongCard />
                        <SingleSongCard />
                        <SingleSongCard />
                        <SingleSongCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadSongComponent;