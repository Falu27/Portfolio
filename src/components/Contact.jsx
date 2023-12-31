import React from 'react'
import { useTranslation } from "react-i18next";

const Contact = () => {
    const [t]= useTranslation("global");
  return (
    <div name={t("navbar.contact")} className='w-full h-screen bg-gradient-to-b from-black to-gray-900 p-4 text-white'>

        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'> 

            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-600'>{t("contact.contact")}</p>
                <p className='py-6'>{t("contact.form1")}</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/fa421f7d-3ca7-40ce-91d2-150841164aba" 
                method='POST'
                className='flex flex-col w-full md:w-1/2'>
                    <input 
                    type="text" 
                    name="name" 
                    placeholder={t("contact.name")} 
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                    
                    <input 
                    type="text" 
                    name="email" 
                    placeholder={t("contact.mail")} 
                    className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />

                    <textarea name="message" 
                    rows="10" 
                    placeholder={t("contact.message")}
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>

                    <button 
                    className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>{t("contact.talk")}</button>

                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact