import SectionTitleHeader from "./section-title-header"


export default function ExperienceSection() {
    const experience = [
        {
            "id": "3",
            "time_range": "02/2021 - 08-2021",
            "company_name": "Jovenes Tech",
            "description": "Agencia-Inovacion & Municipality of Yerba Buena",
            "projects": [
                {
                    "id":"11",
                    "description": "I was learning for my first time, HTML5, CSS3, BOOSTRAP, SEUDO-CODIGO, JavaScript, Habilidades blandas"
                },
                {
                    "id":"12",
                    "description": "Project description 2"
                },

            ]
        },
        {
            "id":"2",
            "time_range": "11/2022 - 01-2023",
            "company_name": "Testing",
            "description": "Global-Learning & Municipality of San Miguel de Tucuman",
            "projects": [
                {
                    "id":"55",
                    "description": "I was learning for my first time, Testing: Cuality Assesurance and Testing Quality Control, with tecnic to work with a team like in a testing team"
                },
                {
                    "id":"56",
                    "description": "Project description 2"
                },
            ]
        },
        {
            "id":"3",
            "time_range": "04/2023 - 08/2023",
            "company_name": "React & Next-JS",
            "description": "Global-Learning & Munipality of Yerba Buena",
            "projects": [
                {
                    "id":"65",
                    "description": "I was learning a lot more to: HTML5, CSS3 - TRANSITIONS - CSS-MODULES, JavaScript, REACT, NODE.JS, TAILWIND-CSS, MARKDOWN, GIT, GITHUB, NODE VERSION MODAL, UBUNTU FOR LINUX, and Material UI"
                },
                {
                    "id":"66",
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
                <li key={item.id} className="mb-10">
                    <span>{item.time_range}</span> <br className="blcok sm:hidden"/> <span className="text-blue-600 pl-4 sm:pl-0">{`>>`}</span> {item.company_name}
                    <p className="mt-3">{item.description}</p>
                    <p className="mt-4">Task && projects:</p>
                        <ul className="list-disc ml-8 mt-4">
                            {item.projects.map((project) => (
                                <li key={project.id}>
                                        {project.description}
                                </li>
                                ))}
                        </ul>       
                    </li>
                ))}
            </ul>
        </div>
    )
}