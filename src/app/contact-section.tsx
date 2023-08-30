import SectionTitleHeader from "./section-title-header"
import Image from "next/image"

import EmailIcon from "./assets/icon-gmail.png"
import PhoneIcon from "./assets/callback.png"

export default function ContactSection() {
    return (
        <div className="mb-12">
            <SectionTitleHeader title="Contact"/>
            <div className="text-base mb-4 text-gray-200">
                If you have any questions or proposals for cooperation, write or call.
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="py-4 pl-4 rounded-xl bg-slate-900 group">
                    <div className="flex items-center cursor-default">
                        <div className="w-8">
                        <Image src={EmailIcon} alt="Email icon" quality={100} className="group-hover:-rotate-12 transition ease-in-out duration-100"/>
                        </div>
                        <div className="ml-4">
                            <a href="mailto:Agustin_correanz@outlook.com" className="text-slate-500 text-sm tracking-wide font-semibold group-hover:text-slate-400 transition ease-in-out duration-100">
                                Agustin_correanz@outlook.com
                            </a>
                        </div>
                    </div>
                </div>
                <div className="py-4 pl-4 rounded-xl bg-slate-900 group">
                    <div className="flex items-center cursor-default">
                        <div className="w-8">
                        <Image src={PhoneIcon} alt="Phone icon" quality={100} className="group-hover:-rotate-12 transition ease-in-out duration-100"/>
                        </div>
                        <div className="ml-4">
                            <a href="tel:+54 0381 665 0301" className="text-slate-500 text-sm tracking-wide font-semibold group-hover:text-slate-400 transition ease-in-out duration-100">
                                +54 0381 665 0301
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}