import { Award, CheckCircle } from 'lucide-react';

const Licenses = () => {
    const certifications = [
        {
            title: "AWS Certified Solutions Architect - Associate",
            issuer: "Amazon Web Services",
            date: "March 2025",
            description: "Demonstrated expertise in designing distributed systems and applications on AWS."
        },
        {
            title: "AWS Cloud Practitioner",
            issuer: "Amazon Web Services",
            date: "April 2023",
            description: "Fundamental understanding of AWS Cloud concepts, services, and basic architecture."
        },
        {
            title: "Containers, Kubernetes, and OpenShift",
            issuer: "Cognitive Class",
            date: "January 2024",
            description: "Proficient in deploying and managing containerized applications using Kubernetes and OpenShift."
        },
        {
            title: "SQL and Relational Databases 101",
            issuer: "Cognitive Class",
            date: "August 2023",
            description: "Basic understanding of SQL and relational database concepts."
        },
        {
            title: "BNB Chain Developer Specialization",
            issuer: "Binance Academy",
            date: "April 2024",
            description: "Specialized knowledge in developing applications on the BNB Chain."}
    ];

    return (
        <div className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-4xl font-extrabold text-green-600 sm:text-5xl">
                        Certifications & Licenses
                    </h1>
                </div>

                <div className="space-y-8">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                        >
                            <div className="p-6 flex items-center">
                                <div className="mr-6">
                                    <Award className="text-blue-500 w-16 h-16" />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                        {cert.title}
                                    </h2>
                                    <div className="flex items-center text-gray-600 mb-2">
                                        <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                                        <span className="font-medium">{cert.issuer}</span>
                                    </div>
                                    <p className="text-gray-500 mb-2">
                                        Obtained: {cert.date}
                                    </p>
                                    <p className="text-gray-700">
                                        {cert.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-600 italic">
                        Continuous learning is key to professional growth
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Licenses;