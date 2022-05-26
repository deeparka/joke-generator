import { useState, useEffect } from "react";

function useRandomJoke(firstName, lastName) {
    const [joke, setJoke] = useState(``);

    useEffect(() => {
        const generateJoke = async () =>
            await fetch(
                `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
            )
                .then((response) => response.json())
                .then((data) => {
                    setJoke(data.value.joke);
                });

        generateJoke();
    }, [firstName, lastName]);

    return joke;
}

export default useRandomJoke;
