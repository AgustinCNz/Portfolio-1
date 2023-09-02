import SectionTitleHeader from "./section-title-header"
import Image from "next/image"

import WebsiteIcon from "/home/agustin/proyecto/Portfolio-nextjs/portfolio-1/public/network.png"
import ComparIcone from "/home/agustin/proyecto/Portfolio-nextjs/portfolio-1/public/gitcompare.png"

export default function ProjectsSection() {
    const projects = [
        {
            "thumbnail" : "/Logo2.png",
            "name" : "Mi-Mascota-Tuc",
            "description" : "Pet register for owners and medical veterinary secretary",
            "live_link" : "not-found",
            "github_link" : "https://github.com/Franciscot93/GL-MYB-GRUPO-6",
        },
        {
            "thumbnail" : "/Logo2.png",
            "name" : "Mi-Mascota-Tuc 2",
            "description" : "Pet register for owners and medical veterinary secretary",
            "live_link" : "not-found",
            "github_link" : "https://github.com/Franciscot93/GL-MYB-GRUPO-6",
        }
    ]
    
    return (
        <div className="mb-12">
            <SectionTitleHeader title="Projects"/>
            <div className="tewxt-base mb-4 text-gray-200">
                Some of my most important open source projects.
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-2">
                {projects.map((project) => (
                    <div className="bg-slate-900 rounded-xl">
                        <div style={{ backgroundImage: `url('${project.thumbnail}')`}}className="bg-no-repeat bg-cover bg-center rounded-tl-xl rounded-tr-xl relative">
                            <div className="aspect-video bg-grandiet-to-b from-transparent to-black">
                                <div className="absolute bottom-0 left-0">
                                    <h3 className="text-xl font-bold text-gray-200 m-2 group-hover:invisible">
                                        {project.name}
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="m-2">
                            <div className="m-4">
                                <p className="text-gray-400 text-sm">
                                    Texto para describir el proyect loco
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="basis-1/2 flex">
                                <a href={project.live_link} target="_blank" className="bg-gray-800 w-full flex items-center justify-center text-center py-3 rounded-lg mr-1 hover:bg-gray-700 transition ease-in-out duration-150">
                                <Image src={WebsiteIcon} alt="Website icon" width={26} height={26} quality={100} />
                                <span className="text-sm font-normal text-gray-200 tracking-wide ml-3">Live</span>
                                </a>
                            </div>
                            <div className="basis-1/2 flex">
                                <a href={project.github_link} target="_blank" className="bg-gray-800 w-full flex items-center justify-center text-center py-3 rounded-lg mr-1 hover:bg-gray-700 transition ease-in-out duration-150">
                                <Image src={ComparIcone} alt="Website icon" width={26} height={26} quality={100} />
                                <span className="text-sm font-normal text-gray-200 tracking-wide ml-3">Github</span>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}