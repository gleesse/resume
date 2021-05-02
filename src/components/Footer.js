import React from 'react'

const GitLogo = () => {
    return(
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
        </div>
    );
}

const LinkedInLogo = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/>
            <circle cx="4" cy="4" r="2"/>
        </svg>
    );
}

function CopyEmailAddress(){
    document.execCommand("copy");
    alert("Copied the text: gl.pvn12@gmail.com");
    
}

const Footer = () => {
    return (
        <div className="flex flex-col h-40">
            <div className="flex items-center p-2 text-xl bg-gray-900 h-36 justify-evenly font-josefin text-red-50">
                <div className="flex flex-col items-center w-48 h-20 space-x-2 space-y-2">
                    <h1>Links:</h1>
                    <div className="inline-flex space-x-2">
                        <div className="inline-flex space-x-2 rounded-full border-2 border-secondary-200 p-1.5 text-xs md:p-3 md:text-xl cursor-pointer transition-colors duration-300 ease-in-out hover:text-secondary-100">
                            <a target="_blank" href="https://github.com/Glexe" className="inline-flex items-baseline text-sm hover:underline"><GitLogo/>@glexe</a>
                        </div>
                        <div className="inline-flex space-x-2 rounded-full border-2 border-secondary-200 p-1.5 text-xs md:p-3 md:text-xl cursor-pointer transition-colors duration-300 ease-in-out hover:text-secondary-100">
                            <a target="_blank" href="https://www.linkedin.com/in/glebpivniev/" className="inline-flex items-baseline text-sm hover:underline"><LinkedInLogo/>@glebpivniev</a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center w-48 h-20 space-x-2 space-y-2">
                    <h1>An email:</h1>
                    <btn onClick={CopyEmailAddress} className="transition-colors duration-300 ease-in-out cursor-pointer hover:text-secondary-100">
                        <h1 className="font-roboto border-2 rounded-full border-secondary-200 p-1.5 text-xs md:p-3 md:text-xl select-all">gl.pvn12@gmail.com</h1>
                    </btn>
                </div>
            </div>
            
            <div className="flex justify-center p-2 text-sm bg-gray-900 text-red-50 font-roboto"><p>© {new Date().getFullYear()}</p></div>
        </div>
    )
}

export default Footer
