function Navbar() {

    return (

        <nav className="bg-white shadow-md sticky top-0 z-50">

            <div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-5">

                <h1 className="text-4xl font-bold text-blue-700">

                    HackConnect

                </h1>

                <ul className="flex gap-10 text-gray-700 font-semibold">

                    <li>

                        <a href="#" className="hover:text-blue-600">

                            Home

                        </a>

                    </li>

                    <li>

                        <a href="#about" className="hover:text-blue-600">

                            About

                        </a>

                    </li>

                    <li>

                        <a href="#technology" className="hover:text-blue-600">

                            Technologies

                        </a>

                    </li>

                    <li>

                        <a href="#schedule" className="hover:text-blue-600">

                            Schedule

                        </a>

                    </li>

                    <li>

                        <a href="#register" className="hover:text-blue-600">

                            Register

                        </a>

                    </li>

                    <li>

                        <a href="#participants" className="hover:text-blue-600">

                            Participants

                        </a>

                    </li>

                </ul>

            </div>

        </nav>

    );

}

export default Navbar;