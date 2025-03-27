const experiences = [
    {
        title: "Lead Analyst Digital Transformation",
        company: "Africa Banking Corporation",
        location: "Nairobi, Nairobi County",
        duration: "07/2024 - Present",
        skills: ["Digital Wallets", "Blockchain Integration", "Cross-functional Team Leadership"]
    },
    {
        title: "Senior Software Developer",
        company: "Africa Banking Corporation",
        location: "Nairobi, Nairobi County",
        duration: "07/2023 - 06/2024",
        skills: ["Software Development", "API Integration", "Blockchain"]
    },
    {
        title: "Software Developer",
        company: "Africa Banking Corporation",
        location: "Nairobi, Nairobi County",
        duration: "04/2022 - 07/2023",
        skills: ["REST APIs", "ISO 20022", "Microservices", "Security & Authentication", "Docker"]
    },
    {
        title: "Software Developer",
        company: "Digisoft Solutions Limited",
        location: "Nairobi, Nairobi County",
        duration: "09/2020 - 12/2021",
        skills: ["ERP Development", "AWS Deployment", "Enterprise Mobile Apps"]
    }
];

const Experience = () => {
    return (
        <div id="experience" className="px-6 md:px-16 py-12">
            <p className="text-3xl font-extrabold text-green-600 mb-8">EXPERIENCE</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {experiences.map((exp, index) => (
                    <div key={index} className="bg-white shadow-xl rounded-2xl p-6 transition-transform duration-300 hover:scale-[1.02]">
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                            <p className="text-md italic text-gray-600">{exp.company} • {exp.location}</p>
                            <p className="text-sm text-gray-500">{exp.duration}</p>
                        </div>
                        <p className="text-gray-700 mb-4 font-semibold">Skills:</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {exp.skills.map((skill, idx) => (
                                <span key={idx} className="bg-green-100 text-green-800 text-xs font-bold px-4 py-2 rounded-full">{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;