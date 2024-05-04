
import { ReactTyped } from "react-typed"
import { BiChevronsUp } from "react-icons/bi";
import { BiCodeAlt } from "react-icons/bi";
import { IoMdDownload } from "react-icons/io";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

export default function Hero() {
    return (
        <div className="flex flex-col items-center mt-20">
            <h1 className="font-bold text-4xl">Scratch but <ReactTyped className="text-blue-500" strings={["better.", "stronger.", "versatile."]} typeSpeed={40} backSpeed={40} backDelay={2000} loop/></h1>
            <p className="mt-5 max-w-[40ch] md:max-w-[60ch] text-center">Terascript is a text-based programming language that compiles directly to the Scratch File Format.</p>
            <Button className="mt-5" variant={"blue"}>Start Coding!</Button>
            
            <div className="mt-20 flex flex-col items-center">
                <div className="flex flex-row">
                    <BiChevronsUp className="size-8" />
                    <h2 className="font-bold text-xl">Upgraded Features</h2>
                </div>
                <Separator className="my-2" />
                <p className="mt-2 max-w-[40ch] md:max-w-[50ch] text-center">More out-of-the-box language features that Scratch does not come with that allows a better development experience.</p>
            </div>

            <div className="mt-20 flex flex-col items-center">
                <div className="flex flex-row">
                    <BiCodeAlt className="size-7 mr-1" />
                    <h2 className="font-bold text-xl">IDE Integration</h2>
                </div>
                <Separator className="my-2" />
                <p className="mt-2 max-w-[40ch] md:max-w-[50ch] text-center">Intellisense and LSP prototypes available for improving your coding environment.</p>
            </div>

            <div className="mt-20 mb-20 flex flex-col items-center">
                <div className="flex flex-row">
                    <IoMdDownload className="size-7 mr-1" />
                    <h2 className="font-bold text-xl">Easily Exportable</h2>
                </div>
                <Separator className="my-2" />
                <p className="mt-2 max-w-[40ch] md:max-w-[50ch] text-center">Quickly compile your Terascript code into native Scratch code within seconds and easily test and export your creations.</p>
            </div>
        </div>
    )
}