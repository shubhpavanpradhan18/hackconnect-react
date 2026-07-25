import { useState, useEffect } from "react";
import api from "../services/api";

function RegistrationForm({
    fetchParticipants,
    editingParticipant,
    setEditingParticipant
}) {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        college: "",
        team: "",
        track: ""
    });

    // Load participant data into the form when Edit is clicked
    useEffect(() => {

        if (editingParticipant) {

            setFormData({
                name: editingParticipant.name,
                email: editingParticipant.email,
                phone: editingParticipant.phone,
                college: editingParticipant.college,
                team: editingParticipant.team,
                track: editingParticipant.track
            });

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }

    }, [editingParticipant]);

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const clearForm = () => {

        setFormData({
            name: "",
            email: "",
            phone: "",
            college: "",
            team: "",
            track: ""
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (
            !formData.name ||
            !formData.email ||
            !formData.phone ||
            !formData.college ||
            !formData.team ||
            !formData.track
        ) {

            alert("Please fill all fields.");

            return;

        }

        try {

            // UPDATE
            if (editingParticipant) {

                await api.put(

                    `/participants/${editingParticipant.id}`,

                    formData

                );

                alert("Participant Updated Successfully!");

                setEditingParticipant(null);

            }

            // CREATE
            else {

                await api.post(

                    "/participants",

                    formData

                );

                alert("Registration Successful!");

            }

            clearForm();

            fetchParticipants();

        }

        catch (error) {

            console.log(error);

            alert("Something went wrong!");

        }

    };

    const cancelEdit = () => {

        clearForm();

        setEditingParticipant(null);

    };

    return (

        <section
            id="register"
            className="py-20"
        >

            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-10">

                <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">

                    {
                        editingParticipant
                            ? "Update Participant"
                            : "Hackathon Registration"
                    }

                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >

                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-4 focus:ring-2 focus:ring-blue-500 outline-none"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-4 focus:ring-2 focus:ring-blue-500 outline-none"
                    />

                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-4 focus:ring-2 focus:ring-blue-500 outline-none"
                    />

                    <input
                        type="text"
                        name="college"
                        placeholder="College Name"
                        value={formData.college}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-4 focus:ring-2 focus:ring-blue-500 outline-none"
                    />

                    <input
                        type="text"
                        name="team"
                        placeholder="Team Name"
                        value={formData.team}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-4 focus:ring-2 focus:ring-blue-500 outline-none"
                    />

                    <select
                        name="track"
                        value={formData.track}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-4 focus:ring-2 focus:ring-blue-500 outline-none"
                    >

                        <option value="">Select Technology Track</option>

                        <option>Artificial Intelligence</option>

                        <option>Web Development</option>

                        <option>Cloud Computing</option>

                        <option>Cyber Security</option>

                        <option>Data Science</option>

                        <option>Internet of Things</option>

                    </select>

                    <div className="flex gap-4">

                        <button
                            type="submit"
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition"
                        >

                            {
                                editingParticipant
                                    ? "Update Participant"
                                    : "Register"
                            }

                        </button>

                        {

                            editingParticipant && (

                                <button
                                    type="button"
                                    onClick={cancelEdit}
                                    className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-bold py-4 rounded-lg transition"
                                >

                                    Cancel

                                </button>

                            )

                        }

                    </div>

                </form>

            </div>

        </section>

    );

}

export default RegistrationForm;