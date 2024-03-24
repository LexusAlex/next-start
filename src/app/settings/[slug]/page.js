
export async function generateStaticParams() {
  const films = await fetch('https://swapi.dev/api/films').then((res) => res.json())

  return films.results.map((film) => ({
    slug: film.title.replace(/\s+/g, '-'),
  }))
}
export default function Slug({params}) {
  return <h1>Slug {params.slug}</h1>
}