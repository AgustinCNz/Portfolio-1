import SectionTitleHeader from "./section-title-header";
import Image from "next/image";

export default function TechnologiesSection() {
   const technologies = [
    {
        "icon_path": "/css3.png",
        "label": "CSS-3"
    },
    {
        "icon_path": "/html-5.png",
        "label": "HTML-5"
    },
    {
        "icon_path": "/javascript.png",
        "label": "JAVA-SCRIPT"
    },
    {
        "icon_path": "/nextjs.png",
        "label": "NEXT-JS"
    },
    {
        "icon_path": "/tailwind.png",
        "label": "TAILWIND-CSS"
    },
    {
        "icon_path": "/react_color-512.png",
        "label": "REACT"
    },
    {
        "icon_path": "/Github-512.png",
        "label": "GIT-HUB"
    },
    {
        "icon_path": "/ubuntu.png",
        "label": "UBUNTU-FOR-LINUX"
    },
    
    
   ]
   
    return (
        <div className="mb-12">
            <SectionTitleHeader title="Technologies" />
            <div className="text-base mb-4 text-gray-200">
                Technologies and tools that I use in my projects.
            </div>
            <div className="flex flex-wrap">
                {technologies.map((item) => (
                <div className="flex py-1 sm:py-1.5 px-2 sm:px3 md:px-4 mr-2 mb-2 bg-slate-900 rounded-xl items-center group duration-150">
                    <Image src={item.icon_path} alt={`Technology icon - ${item.label}`} width={40} height={40} className="group-hover:-rotate-[20deg] transition-all ease-in-out duration-150 w-10 h-10 sm:w-12 sm:h-12 p-1" />
                    <span className="ml-2 sm:ml-3 md:ml-4 text-gray-200 text-sm tracking-wide font-bold cursor-default">
                        {item.label}
                    </span>
                </div>
            ))}
            </div>
        </div>
    )
}