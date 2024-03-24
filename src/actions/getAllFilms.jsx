export function getAllFilms() {
    return fetch('https://swapi.tech/api/films',{ cache: "no-store"}).then(res => res.json())
}