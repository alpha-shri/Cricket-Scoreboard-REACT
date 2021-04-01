const REACT_APP_API_KEY = "5uh6RFgBotYq2iJ5DVTSXDHjL633";

// Service to get All the matches

export const getMatches = async () => {
    const _url = `https://cricapi.com/api/matches?apikey=${REACT_APP_API_KEY}`;

    let response = await fetch(_url);

    return await response.json();

    
}

export const getMatchDetails = (id) => {
    const _url = `https://cricapi.com/api/cricketScore?apikey=${REACT_APP_API_KEY}&unique_id=${id}`;

    return fetch(_url)
            .then( response => response.json())
            .catch( err => console.log("APIService getMatchDetails method: ", err))

}