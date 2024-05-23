// Code: LightDarkToggle Component, without the use of context

'use client'

import {useState} from "react";
import { Tooltip, TooltipTrigger, TooltipProvider, TooltipContent} from "./tooltip";
import {MoonIcon, SunIcon} from "lucide-react";

type Props = {
    className?: string;
}

const LightDarkToggle = ( {className}: Props ) => {

    const [isDarkMode, setIsDarkMode] = useState(true);

    return (
        <div>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger
                        className={className}
                        onClick={() => {
                        setIsDarkMode(prevValue => !prevValue);
                        document.body.classList.toggle("dark");
                    }}>
                        {isDarkMode ? <MoonIcon /> : <SunIcon />}
                    </TooltipTrigger>
                    <TooltipContent>
                        {isDarkMode ? "Enable light mode" : "Enable dark mode"}
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    );
};

export default LightDarkToggle;