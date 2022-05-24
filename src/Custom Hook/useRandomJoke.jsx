import { useState, useEffect } from "react";

function useRandomJoke() {
    const [joke, setJoke] = useState(``);

    useEffect(() => {
        const generateJoke = async () =>
            await fetch(
                `http://api.icndb.com/jokes/random?firstName=Arkadeep&lastName=Prasad`
            )
                .then((response) => response.json())
                .then((data) => {
                    setJoke(data.value.joke);
                });
        generateJoke();
    }, []);

    return joke;
}

export default useRandomJoke;
