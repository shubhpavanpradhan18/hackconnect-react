import { useEffect } from "react";
import api from "../services/api";

function ParticipantTable({
    participants,
    fetchParticipants,
    setEditingParticipant
}) {

    // Fetch participants when component loads
    useEffect(() => {

        fetchParticipants();

    }, []);

    // Delete participant
    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this participant?"
        );

        if (!confirmDelete) return;

        try {

            await api.delete(`/participants/${id}`);

            fetchParticipants();

            alert("Participant Deleted Successfully!");

        }

        catch (error) {

            console.log(error);

            alert("Unable to delete participant.");

        }

    };

    // Edit participant
    const handleEdit = (participant) => {

        setEditingParticipant(participant);

    };

    return (

        <section
            id="participants"
            className="py-20"
        >

            <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-8">

                <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">

                    Registered Participants

                </h2>

                <div className="overflow-x-auto">

                    <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">

                        <thead>

                            <tr className="bg-blue-600 text-white">

                                <th className="px-6 py-4 text-left">Name</th>

                                <th className="px-6 py-4 text-left">Email</th>

                                <th className="px-6 py-4 text-left">Phone</th>

                                <th className="px-6 py-4 text-left">College</th>

                                <th className="px-6 py-4 text-left">Team</th>

                                <th className="px-6 py-4 text-left">Track</th>

                                <th className="px-6 py-4 text-center">Actions</th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                participants.length === 0 ?

                                (

                                    <tr>

                                        <td
                                            colSpan="7"
                                            className="text-center py-12 text-gray-500 text-lg"
                                        >

                                            No Participants Registered Yet

                                        </td>

                                    </tr>

                                )

                                :

                                participants.map((participant) => (

                                    <tr
                                        key={participant.id}
                                        className="border-b hover:bg-sky-50 transition duration-200"
                                    >

                                        <td className="px-6 py-4">
                                            {participant.name}
                                        </td>

                                        <td className="px-6 py-4">
                                            {participant.email}
                                        </td>

                                        <td className="px-6 py-4">
                                            {participant.phone}
                                        </td>

                                        <td className="px-6 py-4">
                                            {participant.college}
                                        </td>

                                        <td className="px-6 py-4">
                                            {participant.team}
                                        </td>

                                        <td className="px-6 py-4">
                                            {participant.track}
                                        </td>

                                        <td className="px-6 py-4 text-center">

                                            <button
                                                onClick={() => handleEdit(participant)}
                                                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg mr-2 transition"
                                            >

                                                Edit

                                            </button>

                                            <button
                                                onClick={() => handleDelete(participant.id)}
                                                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
                                            >

                                                Delete

                                            </button>

                                        </td>

                                    </tr>

                                ))

                            }

                        </tbody>

                    </table>

                </div>

                <div className="mt-8 text-center">

                    <p className="text-lg font-semibold text-gray-700">

                        Total Participants : {" "}

                        <span className="text-blue-700">

                            {participants.length}

                        </span>

                    </p>

                </div>

            </div>

        </section>

    );

}

export default ParticipantTable;