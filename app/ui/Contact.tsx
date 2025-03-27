import Link from 'next/link';

const Contact = () => {
    return (
        <div id='contacts' className='flex flex-col sm:flex-row justify-between px-8 py-12'>
            {/* Contact Form */}
            <div className='sm:w-1/2 w-full'>
                <h2 className='text-2xl font-bold text-green-700 mb-4'>REACH OUT</h2>
                <form action="#" method="POST" className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input type="text" name="name" id="name" autoComplete="name"
                            className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-green-700 focus:ring-green-700" placeholder="Your name" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" name="email" id="email" autoComplete="email"
                            className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-green-700 focus:ring-green-700" placeholder="your.email@example.com" />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                        <input type="text" name="subject" id="subject"
                            className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-green-700 focus:ring-green-700" placeholder="How can we help you?" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea id="message" name="message" rows={4}
                            className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-green-700 focus:ring-green-700" placeholder="Your message here..."></textarea>
                    </div>
                    <button type="submit"
                        className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-2 rounded-md transition">
                        Send Message
                    </button>
                </form>
            </div>

            {/* Socials Section */}
            <div className='sm:w-1/2 w-full mt-8 sm:mt-0 p-6'>
                <h2 className='text-2xl font-bold text-green-700 mb-4'>CONNECT ON SOCIALS</h2>
                <p className='mb-4 text-gray-700'>Let's connect on the socials</p>
                <div className='space-y-4'>
                    {[
                        { name: '@HelloMwai', link: 'https://x.com/HelloMwai', icon: '/svg/x.svg' },
                        { name: 'mwaijohn', link: 'https://www.linkedin.com/in/mwaijohn/', icon: '/svg/linkedin.svg' },
                        { name: 'mwaijohn', link: 'https://github.com/mwaijohn', icon: '/svg/github.svg' },
                    ].map((social, index) => (
                        <div key={index} className='flex items-center space-x-3'>
                            <img src={social.icon} alt={social.name} className="w-6 h-6" />
                            <Link href={social.link} className='text-lg font-medium text-gray-900 hover:text-green-700' target='blank'>
                                {social.name}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Contact;
