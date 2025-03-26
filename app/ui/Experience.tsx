
const experiences = [
    {
        title: "Lead Analyst Digital Transformation",
        company: "Africa Banking Corporation",
        location: "Nairobi, Nairobi County",
        duration: "07/2024 - Present",
        responsibilities: [
            "Built a digital wallet with multiple payment channels.",
            "Led key feature development with a cross-functional team.",
            "Integrated blockchain for security and efficiency."
        ]
    },
    {
        title: "Senior Software Developer",
        company: "Africa Banking Corporation",
        location: "Nairobi, Nairobi County",
        duration: "07/2023 - 06/2024",
        responsibilities: [
            "Built a digital wallet with multiple payment channels.",
            "Led key feature development with a cross-functional team.",
            "Integrated blockchain for security and efficiency."
        ]
    },
    {
        title: "Software Developer",
        company: "Africa Banking Corporation",
        location: "Nairobi, Nairobi County",
        duration: "04/2022 - 07/2023",
        responsibilities: [
            "Led the seamless integration of an interbank payment system, leveraging REST APIs with ISO 20022 messages and mutual authentication (MTLS).",
            "Championed the integration of an Identity and Access Management solution into the organization’s REST-based microservices, fortifying security measures and ensuring controlled access.",
            "Executed complex tax payment integrations, facilitating seamless transactions between organizations, individuals, and the Kenya Revenue Authority through the banking infrastructure.",
            "Played a pivotal role in the maintenance and upgrade of legacy projects, executing successful migrations to scalable and maintainable Docker containerized microservices-oriented development.",
            "Expertly utilized a tech stack comprising Java, JavaScript, Spring Boot, Postgres Database, Tailwind CSS, and React.js, demonstrating versatility and proficiency across various technologies.",
            "Effectively employed RabbitMQ, Kafka, Git, microservices architecture, Docker, Jenkins, and GitLab to streamline development and ensure efficient delivery of projects.",
            "Implemented cutting-edge cryptographic protocols, including MTLS and SSL, to enhance security measures, safeguarding critical systems and data."
        ]
    },
    {
        title: "Software Developer",
        company: "Digisoft Solutions Limited",
        location: "Nairobi, Nairobi County",
        duration: "09/2020 - 12/2021",
        responsibilities: [
            "Led ERP solution development, driving requirement gathering and successful deployment.",
            "Ensured system enhancement, maintenance, and smooth integration.",
            "Provided expert ERP support, resolving issues and maintaining performance.",
            "Developed enterprise mobile apps, boosting business functionality via mobile tech.",
            "Deployed scalable web services on AWS, optimizing resource utilization."
        ]
    }
];

const Experience = () => {
    return (
        <div id="experience" className="p-12">
            <p className="text-2xl font-bold mb-6 text-green-600">EXPERIENCE</p>
            <div className="grid md:grid-cols-2 gap-6">
                {experiences.map((exp, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-2xl p-6">
                        <div className="mb-4">
                            <h3 className="text-lg font-bold">{exp.title}</h3>
                            <p className="text-md italic text-gray-600">{exp.company} • {exp.location}</p>
                            <p className="text-sm text-gray-500">{exp.duration}</p>
                        </div>
                        <ul className="list-disc pl-4 text-sm text-gray-700">
                            {exp.responsibilities.map((item, idx) => (
                                <li key={idx} className="leading-relaxed">{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
