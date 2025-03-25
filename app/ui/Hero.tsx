import Image from "next/image"

const Hero = () => {
    return (
        <div className="flex p-12">
            <Image
                src="/profile.jpg"
                width={500}
                height={500}
                alt="Picture of the author" />
            <div className="ml-12 w-1/2">
                <p className="text-2xl font-bold mb-4">HI, I'M <span className='text-[#008000] '>JOHN MWAI</span></p>
                <p className="text-base leading-relaxed mb-4">Experienced software developer based in Nairobi with
                    expertise in Java, Kotlin, JavaScript, PHP, Spring Boot,
                    and full-stack development.  Skilled in mobile (Android),  web
                    (ReactJS, VueJS), and backend  technologies, with experience in CI/CD,
                    Docker, and Git.  </p>

                <p className="text-base leading-relaxed">Passionate about technical writing and continuous learning.</p>
            </div>
        </div>
    )
}

export default Hero