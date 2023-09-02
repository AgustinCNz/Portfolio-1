import SectionTitleHeader from "./section-title-header"


export default function ExperienceSection() {
    const experience = [
        {
            "time_range": "02/2021 - 08-2021",
            "company_name": "Jovenes Tech",
            "description": "Agencia-Inovacion & Municipality of Yerba Buena",
            "projects": [
                {
                    "description": "I was learning for my first time, HTML5, CSS3, BOOSTRAP, SEUDO-CODIGO, JavaScript, Habilidades blandas"
                },
                {
                    "description": "Project description 2"
                },

            ]
        },
        {
            "time_range": "11/2022 - 01-2023",
            "company_name": "Testing",
            "description": "Global-Learning & Municipality of San Miguel de Tucuman",
            "projects": [
                {
                    "description": "I was learning for my first time, Testing: Cuality Assesurance and Testing Quality Control, with tecnic to work with a team like in a testing team"
                },
                {
                    "description": "Project description 2"
                },
            ]
        },
        {
            "time_range": "04/2023 - 08/2023",
            "company_name": "React & Next-JS",
            "description": "Global-Learning & Munipality of Yerba Buena",
            "projects": [
                {
                    "description": "I was learning a lot more to: HTML5, CSS3 - TRANSITIONS - CSS-MODULES, JavaScript, REACT, NODE.JS, TAILWIND-CSS, MARKDOWN, GIT, GITHUB, NODE VERSION MODAL, UBUNTU FOR LINUX, and Material UI"
                },
                {
                    "description": "Project description 2"
                },
            ]
        }
    ] 
    return (
        <div className="mb-12">
            <SectionTitleHeader title="Experience"/>
            <div className="text-base mb-4 text-gray-200">
                I' started learning with a lot of course online with the pass of the time and i learn a lot from the word of develop. Particulartly i study for a frontend develop. 
            </div>
            <ul className="list-inside lg:list-outside list-disc text-gray-200">
                {experience.map((item) => (
                    <li className="mb-10">
                        <div className="text-lg font-medium mb-3 text-gray-300">
                            {item.time_range} <br className="blcok sm:hidden"/> <span className="text-blue-600 pl-4 sm:pl-0">{`>>`}</span> {item.company_name}
                        </div>
                        <div>
                            <p>{item.description}</p>
                        </div>
                        <div className="mt-4">
                            <p>Task && projects:</p>
                            </div>
                            <div className="ml-8 mt-4">
                            <ul className="list-disc">
                                {item.projects.map((project) => (
                                    <li>
                                        {project.description}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}

            </ul>
        </div>
    )
}