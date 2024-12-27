import { Icon } from "@iconify/react";

const IconText = ({ iconName, text, active}) => {
    return (
        <div className="flex items-center justify-start p-5 cursor-pointer hover:bg-gray-600">
            <div className="px-4 py-0.8">
                <Icon icon={iconName} color={active ? "white" : "gray"} fontSize={35} />
            </div>
            <div className={`${active ? "text-white" : "text-gray-400"} font-bold`}>
                {text}
            </div>
        </div>
    );
};

export default IconText;