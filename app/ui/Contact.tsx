'use client'
import React, { useState } from 'react';
import { saveEmail } from "../lib/actions";

const Contact = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    async function handleSubmit(formData: FormData) {
        setIsLoading(true);
        setError(null);
        setSuccess(null);

        try {
            const result = await saveEmail(formData);

            if (result.success) {
                setSuccess(result.message);
                // Optional: reset form or redirect
            } else {
                setError(result.message || 'An unexpected error occurred');
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unexpected error occurred');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div id='contacts' className='w-full'>
            <h2 className='text-2xl font-bold text-green-700 mb-4 text-center'>REACH OUT</h2>
            <div className='w-full lg:w-2/3 mx-auto'>
                <form action={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Full Name</label>
                        <input type="text" name="name" id="name" autoComplete="name"
                            className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-green-700 focus:ring-green-700" placeholder="Your name" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
                        <input type="email" name="email" id="email" autoComplete="email"
                            className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-green-700 focus:ring-green-700" placeholder="your.email@example.com" required />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block text-sm font-semibold text-gray-700">Subject</label>
                        <input type="text" name="subject" id="subject"
                            className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-green-700 focus:ring-green-700" placeholder="How can we help you?" required />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Message</label>
                        <textarea id="message" name="message" rows={4}
                            className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-green-700 focus:ring-green-700" placeholder="Your message here..." required></textarea>
                    </div>
                    {error && <div className="text-red-500">{error}</div>}
                    {success && <div className="text-green-500">{success}</div>}
                    <button type="submit"
                        className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-2 rounded-md transition">
                        {isLoading ? 'Submitting message...' : 'Send Message'}

                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
