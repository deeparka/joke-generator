import { useRef, useState } from "react";
import useRandomJoke from "./Custom Hook/useRandomJoke";

function App() {
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);

    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Doe");

    const joke = useRandomJoke(firstName, lastName);

    const generateJoke = (e) => {
        e.preventDefault();
        setFirstName(firstNameRef.current.value);
        setLastName(lastNameRef.current.value);
    };

    return (
        <div>
            <center>
                <h1>The Joke Generator</h1>
                <h5>{joke}</h5>
                <form action="">
                    <input placeholder="First Name" ref={firstNameRef} />
                    <input placeholder="Last Name" ref={lastNameRef} />
                    <button onClick={generateJoke}>Generate Joke</button>
                </form>
            </center>
        </div>
    );
}

export default App;
