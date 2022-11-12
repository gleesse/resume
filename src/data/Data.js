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
                {name:"SQL", indicator:OrangeIndicator},
                {name:"html,css,js", indicator:RedIndicator},
                {name:"UML", indicator:RedIndicator},
                {name:"json,yaml,csv", logo:JsonLogo, indicator:OrangeIndicator},
                {name:"Java", logo:JavaLogo, indicator:OrangeIndicator},
                {name:"Python", logo:PythonLogo, indicator:RedIndicator},
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
                {name:"REST"},
                {name:"MVC"},
                {name:"Repository pattern"},
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
                {name:"DevExpress"},
                {name:"WPF"},
                {name:"efcore"},
                {name:"asp.net"},
                {name:"react.js"},
                {name:"node.js"},
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
        "json,yaml,csv",
        "ms office",
        "blender",
        "unity",
    ]
};