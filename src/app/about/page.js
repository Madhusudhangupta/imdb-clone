export default function About() {
  return (
    <>
      <section className="max-w-6xl mx-auto space-y-8 p-6">
        <header className="text-center">
          <h1 className="text-3xl font-semibold text-amber-600">About</h1>
          <h2 className="text-xl font-medium mt-2">Welcome to the IMDb Clone</h2>
        </header>

        <div>
          <p className="mt-4 text-lg">
            Welcome to our IMDb Clone, a movie discovery platform that lets you explore a vast collection of movies and TV shows. Whether you&apos;re looking for the latest trending films, top-rated classics, or searching for specific titles, our platform makes it easy to browse and find what you&apos;re looking for, just like IMDb!
          </p>
        </div>

        <section className="mt-6">
          <h3 className="text-xl font-semibold text-amber-500">Features</h3>
          <ul className="list-disc pl-6 mt-2 text-lg">
            <li><p>Toggle between light and dark mode for a personalized viewing experience.</p></li>
            <li><p>Browse top-rated and trending movies, and see up-to-date information about the best in cinema.</p></li>
            <li><p>Search for movies and TV shows by title, genre, or rating.</p></li>
          </ul>
        </section>

        <section className="mt-6 space-y-4">
          <h3 className="text-xl font-semibold text-amber-500">What You Can Do Here</h3>
          <p>
            Our IMDb Clone allows you to discover movies and TV shows in a user-friendly environment. With its simple design, you can:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Search for specific movies, actors, and TV shows.</li>
            <li>Filter your searches by genres, ratings, and popularity.</li>
            <li>Explore detailed information about each movie, including plot summaries, cast, ratings, and release dates.</li>
            <li>Switch between light and dark mode to suit your browsing preferences.</li>
          </ul>
        </section>

        <section className="mt-6 space-y-4">
          <h3 className="text-xl font-semibold text-amber-500">Why Use This Site?</h3>
          <p>
            Our IMDb Clone is a free and easy-to-use tool for movie enthusiasts who want to stay up-to-date with the latest movies and TV shows. Whether you&apos;re planning your next movie night, researching a new show, or just exploring popular content, this site provides a seamless browsing experience.
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Get quick access to trending and top-rated movies.</li>
            <li>Stay informed with up-to-date information on the latest releases.</li>
            <li>Enjoy an easy-to-navigate interface designed for movie lovers.</li>
          </ul>
        </section>
      </section>

      <footer className="mx-auto text-center mt-8 p-4 bg-gray-800 text-white">
        <p>Made with 💗 by EviL</p>
      </footer>
    </>
  );
}
