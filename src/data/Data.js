import CsLogo from '../images/logos/CsLogo.svg'
import JavaLogo from '../images/logos/JavaLogo.svg'
import PythonLogo from '../images/logos/PythonLogo.svg'
import GitLogo from '../images/logos/GitLogo.svg'
import BlenderLogo from '../images/logos/BlenderLogo.svg'
import UnityLogo from '../images/logos/UnityLogo.svg'
import JsonLogo from '../images/logos/JsonLogo.svg'
import JiraLogo from '../images/logos/JiraLogo.svg'
import DockerLogo from '../images/logos/DockerLogo.svg'

import GreenIndicator from '../images/indicators/GreenIndicator.svg'
import OrangeIndicator from '../images/indicators/OrangeIndicator.svg'
import RedIndicator from '../images/indicators/RedIndicator.svg'
import EmptyIndicator from '../images/indicators/EmptyIndicator.svg'

export const CardsData = [
    [
        {
            title: "Tech",
            content: 
            [
                {name:"C#", logo:CsLogo, indicator:GreenIndicator},
                {name:"Java", logo:JavaLogo, indicator:OrangeIndicator},
                {name:"Python", logo:PythonLogo, indicator:RedIndicator},
                {name:"git", logo:GitLogo, indicator:OrangeIndicator},
                {name:"sql", indicator:OrangeIndicator},
                {name:"html,css,js", indicator:RedIndicator},
                {name:"UML", indicator:RedIndicator},
                {name:"jira", logo:JiraLogo, indicator:EmptyIndicator},
                {name:"docker", logo:DockerLogo, indicator:RedIndicator},
                {name:"json,yaml", logo:JsonLogo, indicator:OrangeIndicator},
                {name:"ms office", indicator:RedIndicator},
                {name:"blender", logo:BlenderLogo, indicator:RedIndicator},
                {name:"unity", logo:UnityLogo, indicator:OrangeIndicator}
            ]
        }
    ],
    
    [
        {
            title: "Patterns",
            content: 
            [
                {name:"SOLID"},
                {name:"DI"},
                {name:"rest"},
                {name:"DDD"},
                {name:"TBD"},
                {name:"GitFlow"},
                {name:"crqs"},
                {name:"designer"},
                {name:"MVC"},
                {name:"repository"},
                {name:"Singleton"},
                {name:"Factory method"},
                {name:"State pattern"},
            ]
        },
    ],

    [
        {
            title: "Frameworks",
            content: 
            [
                {name:"react.js"},
                {name:"node.js"},
                {name:"asp.net"},
                {name:"efcore"},
                {name:"WPF"},
                {name:"tailwind"}
            ]
        },
    ],
];

export const TechCard = {
    title: "Tech",
    content: 
    [
        "C#",
        "Java",
        "Python",
        "git",
        "html,css,js",
        "json,xaml,csv",
        "ms office",
        "blender",
        "unity",
    ]
};