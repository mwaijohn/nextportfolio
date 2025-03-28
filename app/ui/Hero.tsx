import Image from "next/image"
import Link from "next/link"


const Hero = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center px-6 md:px-16 py-12">
            {/* Profile Image */}
            <div className="w-full sm:w-1/3 flex justify-center">
                <Image
                    src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    className="rounded-lg shadow-lg"
                />
            </div>

            {/* Text Content */}
            <div className="sm:w-2/3 mt-8 sm:mt-0 sm:ml-12 text-center sm:text-left">
                <p className="text-3xl md:text-4xl font-extrabold mb-4">
                    HI, I&apos;M <span className="text-green-600">JOHN MWAI</span>
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-4">
                    Experienced software developer based in Nairobi with expertise in Java, Kotlin,
                    JavaScript, PHP, Spring Boot, and full-stack development. Skilled in mobile (Android),
                    web (ReactJS, VueJS), and backend technologies, with experience in CI/CD, Docker, and Git.
                </p>
                <p className="text-lg md:text-xl text-gray-600">
                    Passionate about technical writing and continuous learning.
                </p>

                <div className='flex mt-4 space-x-4 text-center'>

                    {[
                        { name: '@HelloMwai', link: 'https://x.com/HelloMwai', icon: '/svg/x.svg' },
                        { name: 'mwaijohn', link: 'https://www.linkedin.com/in/mwaijohn/', icon: '/svg/linkedin.svg' },
                        { name: 'mwaijohn', link: 'https://github.com/mwaijohn', icon: '/svg/github.svg' },
                    ].map((social, index) => (
                        <Link href={social.link} key={index} className='text-lg font-medium text-gray-900 hover:text-green-700' target='blank'>
                            {/* <img src={social.icon} alt={social.name} className="w-8 h-8" />
                             */}
                            <Image
                                src={social.icon}
                                alt={social.name}
                                width={24}
                                height={24}
                            />
                            yeah
                        </Link>
                    ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Hero
