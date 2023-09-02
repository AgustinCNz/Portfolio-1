import SectionTitleHeader from "./section-title-header";


export default function LinkSection() {
    const links = [
        {
            "url": "",
            "icon_path": "",
            "label": ""
        },
        {
            "url": "",
            "icon_path": "",
            "label": ""
        },
        {
            "url": "",
            "icon_path": "",
            "label": ""
        }
    ]

    return (
        <div className="mb-12">
            <SectionTitleHeader title="Links"/>
            <div className="text-base mb-4 text-gray-200">
                Check out my other sites and resources.
            </div>
            <div>
                {links.map((link) => (
                    <a href={link.url} target="_blank" className="flex item-center w-full rounded-xl p-1.5 mb-2 bg-slate-900 group hover:bg-slate-800 transition-shadow duration-200">
                        <div className="flex w-full text-center">
                            <div className="w-10 sm:w12 sm:h-12 otem-center flex">
                                <img src={link.icon_path} className="p-0.5 group-hover:-rotate-[20deg] transition-all ease-in-out duration-150"/>
                            </div>
                            <h2 className="flex justify-center items-center font-bold text-sm text-gray-200 -ml-10 group-hover:tracking-widest ease-in-out duration-200">
                                {link.label}
                            </h2>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}