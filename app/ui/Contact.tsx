import Link from 'next/link'
import React from 'react'

const Contact = () => {
    return (
        <div id='contacts' className='flex justify-between'>
            <div className='contact-form w-1/2 p-4'>
                <p className='text-2xl font-bold mb-4 text-[#008000]'>REACH OUT</p>
                <div className="">
                    <form action="#" method="POST" className="space-y-6 w-full">
                        <div className='w-full'>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input type="text" name="name" id="name" autoComplete="name"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#3e753e] focus:ring-[#3e753e] py-2 px-3 border" placeholder="Your name" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" name="email" id="email" autoComplete="email"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#3e753e] focus:ring-[#3e753e] py-2 px-3 border" placeholder="your.email@example.com" />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                            <input type="text" name="subject" id="subject"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#3e753e] focus:ring-[#3e753e] py-2 px-3 border" placeholder="How can we help you?" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea id="message" name="message" rows={4}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#3e753e] focus:ring-[#3e753e] py-2 px-3 border" placeholder="Your message here..."></textarea>
                        </div>
                        <div>
                            <button type="submit"
                                className="w-full flex justify-center py-3 px-4 font-bold border border-transparent rounded-md shadow-sm text-sm text-white bg-[#008000] hover:bg-[#3e753e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:[#3e753e] transition-colors">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='socials w-1/2 p-4'>
                <p className='text-2xl font-bold mb-4 text-[#008000]'>CONNECT ON SOCIALS</p>
                <p className='mb-4 text-base'>Lets connect on the socials</p>
                <div id='socials' className='flex flex-col space-y-4'>
                    <div className='flex space-x-2'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={36}
                            height={36}
                            viewBox="0 0 50 50"
                            fill='#008000'
                        >
                            <path
                                d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"
                                fill='#008000'
                            />
                        </svg>
                        <Link href={""} className='text-xl font-bold'>HelloMwai</Link>
                    </div>

                    <div className='flex space-x-2 align-center'>
                        <svg
                            viewBox="0 0 256 256"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#008000"
                            height={36}
                            width={36}
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                            <g id="SVGRepo_iconCarrier">
                                <g fill="none">
                                    <path
                                        d="M0 18.338C0 8.216 8.474 0 18.92 0h218.16C247.53 0 256 8.216 256 18.338v219.327C256 247.79 247.53 256 237.08 256H18.92C8.475 256 0 247.791 0 237.668V18.335z"
                                        fill="#008000"
                                    />
                                    <path
                                        d="M77.796 214.238V98.986H39.488v115.252H77.8zM58.65 83.253c13.356 0 21.671-8.85 21.671-19.91-.25-11.312-8.315-19.915-21.417-19.915-13.111 0-21.674 8.603-21.674 19.914 0 11.06 8.312 19.91 21.169 19.91h.248zM99 214.238h38.305v-64.355c0-3.44.25-6.889 1.262-9.346 2.768-6.885 9.071-14.012 19.656-14.012 13.858 0 19.405 10.568 19.405 26.063v61.65h38.304v-66.082c0-35.399-18.896-51.872-44.099-51.872-20.663 0-29.738 11.549-34.78 19.415h.255V98.99H99.002c.5 10.812-.003 115.252-.003 115.252z"
                                        fill="#ffffff"
                                    />
                                </g>
                            </g>
                        </svg>
                        <Link href={""} className='text-xl font-bold'>mwaijohn</Link>
                    </div>

                    <div className='flex space-x-2 align-center'>
                        <svg
                            viewBox="0 0 20 20"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            fill="#008000"
                            height={36}
                            width={36}
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                            <g id="SVGRepo_iconCarrier">
                                <title>github [#142]</title>
                                <desc>Created with Sketch.</desc>
                                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#008000">
                                        <g id="icons" transform="translate(56.000000, 160.000000)">
                                            <path
                                                d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                                                id="github-[#142]"
                                            />
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <Link href={""} className='text-xl font-bold'>mwaijohn</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact