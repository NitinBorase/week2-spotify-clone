import { Icon } from "@iconify/react";
import { useState } from "react";
import IconText from "../components/shared/IconText";
import TextWithHover from "../components/shared/TextWithHover";
import TextInput from "../components/shared/TextInput";
import CloudinaryUpload from "../components/shared/CloudinaryUpload";
import {makeauthenticatedPOSTRequest} from "../utils/serverHelpers";
import { useNavigate } from "react-router-dom";

const focusCardData = [{title:"Focus",description:"Music to help you concentrate.",imageurl:"https://static.vecteezy.com/system/resources/thumbnails/047/918/672/small_2x/music-abstract-with-headphones-horizontal-wallpaper-photo.jpg"},
    {title:"Focus",description:"Music to help you concentrate.",imageurl:"https://static.vecteezy.com/system/resources/thumbnails/047/918/672/small_2x/music-abstract-with-headphones-horizontal-wallpaper-photo.jpg"},
    {title:"Focus",description:"Music to help you concentrate.",imageurl:"https://static.vecteezy.com/system/resources/thumbnails/047/918/672/small_2x/music-abstract-with-headphones-horizontal-wallpaper-photo.jpg"},
    {title:"Focus",description:"Music to help you concentrate.",imageurl:"https://static.vecteezy.com/system/resources/thumbnails/047/918/672/small_2x/music-abstract-with-headphones-horizontal-wallpaper-photo.jpg"},
    {title:"Focus",description:"Music to help you concentrate.",imageurl:"https://static.vecteezy.com/system/resources/thumbnails/047/918/672/small_2x/music-abstract-with-headphones-horizontal-wallpaper-photo.jpg"},
];

const UploadSongComponent = () => {
    const [name,setname] = useState("");
    const [thumbnail,setthumbnail] = useState("");
    const [playlistUrl,setplaylistUrl] = useState("");
    const [uploadedSongName,setUploadedSongName] = useState("");
    const navigate = useNavigate();

    const sumbitSong = async () => {
        const data = {name, thumbnail, track:playlistUrl};
        const response = await makeauthenticatedPOSTRequest("/song/create",data);
        console.log(response);
        if(response.err){
            alert("Failed to upload song");
        }
        alert("Song uploaded successfully");
        navigate("/home");
    }

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
                <div className="content p-8 pt-0 ovrflow-y-auto text-white">
                    <div className="text-2xl font-bold mb-5 mt-8">
                        Upload Your Music Here
                    </div>
                    <div className="w-full flex space-x-5 text-black">
                        <TextInput label="Song Name" placeholder="Enter Song Name" value={name} setValue={setname}/>
                        <TextInput label="Thumbnail" placeholder="Enter Thumbnail " value={thumbnail} setValue={setthumbnail}/>
                    </div>
                    <div className="py-5">
                        {
                            uploadedSongName ? (
                                <div className="rounded-md text-white text-lg font-semibold w-1/3">
                                {uploadedSongName.substring(0,26)}...
                            </div> 
                             ) :(
                                <CloudinaryUpload setUrl={setplaylistUrl} setName={setUploadedSongName}/>
                             )
                        }
                    </div>
                    <div className="bg-green-500 flex item-center justify-center font-semibold text-white rounded-md p-2 w-32 cursor-pointer"
                        onClick={sumbitSong}>
                        Sumbit Song
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadSongComponent;