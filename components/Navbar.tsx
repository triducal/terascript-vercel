import Link from "next/link";
import { Button } from "./ui/button";
import { BsGithub } from "react-icons/bs"
import { SiScratch } from "react-icons/si";

export default function Navbar() {
    return (
        <nav className="flex justify-center mx-2">
            <div className="flex items-center justify-between p-2 max-w-[800px] w-full">
                <div>
                    <h1 className="font-bold text-lg text-neutral-700"><span className="text-blue-500">{"<"}</span>Terascript<span className="text-blue-500">{"/>"}</span></h1>
                </div>
                <div className="flex flex-row space-x-1">
                <Button size={"sm"} variant={"ghost"}>Packages</Button>
                <Button size={"sm"} variant={"ghost"}>Documentation</Button>
                    <Button asChild size={"sm"} variant={"ghost"}>
                        <Link href={"https://www.github.com/terascript"} target="_blank"> <BsGithub /> </Link>
                    </Button>
                    <Button asChild size={"sm"} variant={"ghost"}>
                        <Link href={"https://scratch.mit.edu/users/terascript"} target="_blank"> <SiScratch /> </Link>
                    </Button>
                </div>
                <div className="flex flex-row space-x-2">
                    <Button size={"sm"} variant={"blue"}>Get Started</Button>
                </div>
            </div>
        </nav>
    )
}