'use server'
import { link } from 'fs';
import { Award, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const Licenses = () => {
    const certifications = [
        {
            title: "AWS Certified Solutions Architect - Associate",
            issuer: "Amazon Web Services",
            date: "March 2025",
            description: "Demonstrated expertise in designing distributed systems and applications on AWS.",
            link: "https://www.credly.com/badges/801def41-454b-4fb3-8e78-be34637c6393"
        },
        {
            title: "AWS Cloud Practitioner",
            issuer: "Amazon Web Services",
            date: "April 2023",
            description: "Fundamental understanding of AWS Cloud concepts, services, and basic architecture.",
            link: "https://www.credly.com/badges/2a94ccef-f8c4-4ae6-85f7-19204d628cf1/public_url"
        },
        {
            title: "Containers, Kubernetes, and OpenShift",
            issuer: "Cognitive Class",
            date: "January 2024",
            description: "Proficient in deploying and managing containerized applications using Kubernetes and OpenShift.",
            link: "https://courses.cognitiveclass.ai/certificates/c74aeb15dd7541479048febce0ffc570"
        },
        {
            title: "SQL and Relational Databases 101",
            issuer: "Cognitive Class",
            date: "August 2023",
            description: "Basic understanding of SQL and relational database concepts.",
            link: "https://courses.cognitiveclass.ai/certificates/1910c6b2dd6546329188f9b27f04804f"
        },
        {
            title: "BNB Chain Developer Specialization",
            issuer: "Binance Academy",
            date: "April 2024",
            description: "Specialized knowledge in developing applications on the BNB Chain.",
            link: "https://academy.binance.com/en/courses/certificate/2a89afcbbca5d5b96a61a2fa3bdda41b2f9abc2ff5c0102241344a3d59507ea0"
        }
    ];

    return (
        <div className="py-12 px-4 sm:px-6 lg:px-8" id='certifications'>
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
                                <div className="mr-6 hidden sm:block">
                                    <Award className="text-blue-500 w-16 h-16" />
                                </div>
                                <div className="flex-1">
                                    <Link href={cert.link} target='blank'>
                                        <h2 className="text-2xl font-bold text-gray-900 mb-2 hover:text-green-700 transition duration-200">
                                            {cert.title}
                                        </h2>
                                    </Link>
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