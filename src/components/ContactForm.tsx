import emailjs from '@emailjs/browser'
import type  {EmailJSResponseStatus}  from '@emailjs/browser'
import Swal from 'sweetalert2'
import React from 'react'
const initialForm = {
    user_name: '',
    message: '',
    user_email: '',
}



export default function ContactForm  ()  {
    const [form, setForm] = React.useState(initialForm)
    const emailRegExp = new RegExp('/^\S+@\S+\.\S+$/')
    
    const handleChange = (e :  any) => {
        const {value, name} = e.target
        setForm({...form, [name]: value})
    }

    const sendForm = async (e : React.FormEvent) => {
        e.preventDefault();

        const emailValue = true
        const messageValue = form.message !== ''
        if(emailValue && messageValue){
            console.log('entre')
            const response = await emailjs.send('service_wj99zi2', 'template_4rqkjcc', form,'rK8bCv7Jvp33cx9sG' )
            if(response.status === 200) {
                Swal.fire('Thanks for contacting', undefined, 'success')
            } else {
                Swal.fire('An error occurred', undefined, 'error')
            }
        }

    }


    return (
        <>
            <div className="w-full lg:pl-12">
                <div className="overflow-hidden bg-white rounded-md">
                    <div className="p-6 sm:p-8">

                        <form className="mt-4" onSubmit={sendForm}>
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="text-base font-bold text-gray-900"> Your name </label>
                                    <div className="mt-2.5 relative">
                                        <input
                                            type="text"
                                            name="user_name"
                                            id="user_name"
                                            value={form.user_name}
                                            onChange={handleChange}
                                            placeholder="Enter your full name"
                                            className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-blue-700 focus:border-blue-800 caret-blue-800"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="text-base font-bold text-gray-900"> Email address </label>
                                    <div className="mt-2.5 relative">
                                        <input
                                            type="text"
                                            name="user_email"
                                            id="user_email"
                                            value={form.user_email}
                                            onChange={handleChange}
                                            placeholder="Enter your email"
                                            className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-blue-700 focus:border-blue-800 caret-blue-800"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="text-base font-bold text-gray-900"> Message </label>
                                    <div className="mt-2.5 relative">
                                        <textarea
                                            name="message"
                                            id="message"
                                            placeholder="Enter your message"
                                            value={form.message}
                                            onChange={handleChange}
                                            className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:ring-blue-700 focus:border-blue-800 caret-blue-800"
                                            rows={4}
                                        ></textarea>
                                    </div>
                                </div>

                                <div>
                                    <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-bold text-white transition-all duration-200 bg-[#1C1C37] border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                                        Send
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}




