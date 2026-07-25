import { useState } from "react";
import api from "./services/api";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Schedule from "./components/Schedule";
import RegistrationForm from "./components/RegistrationForm";
import ParticipantTable from "./components/ParticipantTable";
import Footer from "./components/Footer";

function App() {

    // Stores all registered participants
    const [participants, setParticipants] = useState([]);

    // Stores participant currently being edited
    const [editingParticipant, setEditingParticipant] = useState(null);

    // Fetch all participants from JSON Server
    const fetchParticipants = async () => {

        try {

            const response = await api.get("/participants");

            setParticipants(response.data);

        }

        catch (error) {

            console.log("Error fetching participants:", error);

        }

    };

    return (

        <div className="min-h-screen bg-sky-100">

            <Navbar />

            <Hero />

            <About />

            <Technologies />

            <Schedule />

            <RegistrationForm

                fetchParticipants={fetchParticipants}

                editingParticipant={editingParticipant}

                setEditingParticipant={setEditingParticipant}

            />

            <ParticipantTable

                participants={participants}

                fetchParticipants={fetchParticipants}

                setEditingParticipant={setEditingParticipant}

            />

            <Footer />

        </div>

    );

}

export default App;