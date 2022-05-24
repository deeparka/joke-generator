import useRandomJoke from "./Custom Hook/useRandomJoke";

function App() {
    const joke = useRandomJoke();
    return (
        <div>
            <center>
                <h1>The Joke Generator</h1>
                <h5>{joke}</h5>
                <button>Generate Joke</button>
            </center>
        </div>
    );
}

export default App;
