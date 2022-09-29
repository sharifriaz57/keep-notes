import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import AppImage from '../../assets/images/keep_2020q4_48dp.png';
import { AiOutlineSearch } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";

const Header = () => {
    const [isFocused, setIsFocused] = useState(false);


    return (
        <div className="w-full p-2">
            <div id="header" className="flex items-center">

                <div className="header-left flex items-center">
                    <div className="w-11 h-11 mx-1 flex items-center justify-center rounded-full hover:bg-dark-opacity-1">
                        <IoIosMenu className="text-3xl text-lightColor" />
                    </div>
                    <div className="flex items-center">
                        <img src={AppImage} alt="app-logo" className="w-10 h-10" />
                        <div className="ml-2 text-xl text-lightColor">Keep Notes</div>
                    </div>
                </div>

                <div className="header-right w-full flex justify-between items-center">
                    <div className="header-search max-w-screen-sm w-full relative">
                        <input type="text" className={`w-full h-12 px-14 rounded-lg bg-dark-opacity-2 outline-none
                             focus:bg-lightColor ${isFocused ? 'text-darkColor' : 'text-lightColor'} `}
                            onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} />
                        <button className="absolute top-0 left-0 z-10">
                            <AiOutlineSearch className={`w-10 h-10 p-2 m-1 ml-2 text-3xl rounded-full
                                ${isFocused ? 'text-darkColor' : 'text-lightColor'} hover:bg-dark-opacity-1`} />
                        </button>
                        <button className={`absolute top-0 right-0 z-10`}>
                            <VscChromeClose className={`w-10 h-10 p-2.5 m-1 mr-2 text-3xl rounded-full
                                ${isFocused ? 'text-darkColor' : 'text-lightColor'} hover:bg-dark-opacity-1`} />
                        </button>
                    </div>
                    
                    <div className="header-settings">
                        <div>
                            <VscChromeClose className={`w-10 h-10 p-2.5 m-1 mr-2 text-3xl rounded-full
                                hover:text-dark-opacity-1 hover:bg-dark-opacity-1`} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header