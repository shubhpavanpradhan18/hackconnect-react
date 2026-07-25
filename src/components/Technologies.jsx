function Technologies() {

    const technologies = [

        "🤖 Artificial Intelligence",

        "🌐 Web Development",

        "☁️ Cloud Computing",

        "🔐 Cyber Security",

        "📊 Data Science",

        "📱 Mobile App Development",

        "🌍 Internet of Things",

        "💻 Software Engineering"

    ];

    return (

        <section
            id="technology"
            className="py-16"
        >

            <div className="max-w-6xl mx-auto">

                <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">

                    Technologies

                </h2>

                <div className="grid md:grid-cols-4 gap-6">

                    {

                        technologies.map((tech, index) => (

                            <div
                                key={index}
                                className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition"
                            >

                                <h3 className="text-xl font-semibold">

                                    {tech}

                                </h3>

                            </div>

                        ))

                    }

                </div>

            </div>

        </section>

    );

}

export default Technologies;