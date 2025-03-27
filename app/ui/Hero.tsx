import Image from "next/image"

const Hero = () => {
    return (
        <div className="flex flex-col sm:flex-row items-center px-6 md:px-16 py-12">
            {/* Profile Image */}
            <div className="w-full sm:w-1/3 flex justify-center">
                <Image
                    src="/profile.jpg"
                    width={350}
                    height={350}
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
            </div>
        </div>
    )
}

export default Hero
