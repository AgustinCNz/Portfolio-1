import SectionTitleHeader from "./section-title-header"

export default function InformationSection() {
    const information = [
        {
            "label": "name",
            "value": "Luis Agustin Correa Nuñez"
        },
        {
            "label": "birthday",
            "value": "29 October 1997"
        },
        {
            "label": "country",
            "value": "Argentina"
        },
        {
            "label": "city",
            "value": "Tucuman"
        },
        {
            "label": "lenguages",
            "value": "Spanish, English"
        },
        {
            "label":"experience",
            "value":"1 monts"
        },
        {
            "label":"status",
            "value":"Open to challenges"
        },
    ]

    return (
        <div className="mb-12">
            <SectionTitleHeader title="Information"/>
            <div className="text-gray-200 cursor-default">
            {information.map((item) => (
                <div>
                  <div className="flex flex-row mb-4">
                    <div className="basis-1/3">
                        <p>
                            <span className="text-blue-600 font-black">_</span>{item.label}
                        </p>
                    </div>
                    <div className="basis-1/2">
                        <p>{item.value}</p>
                    </div>
                    </div>  
                </div>
            ))}
            </div>
        </div>
    )
}