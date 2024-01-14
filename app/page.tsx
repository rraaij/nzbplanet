import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import {
  MovieInfo,
  MovieItem,
  MoviePoster,
  MoviePosterInfo,
} from "@/lib/model";
import Image from "next/image";

// const font = Poppins({ subsets: ["latin"], weight: ["600"] });

const london_underground = localFont({
  src: [
    {
      path: "../public/font/london_underground_regular.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/font/london_underground_medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../public/font/london_underground_heavy.ttf",
      weight: "700",
      style: "heavy",
    },
    {
      path: "../public/font/london_underground_bold.ttf",
      weight: "800",
      style: "bold",
    },
  ],
  variable: "--font-londonunderground",
});

const getMovies = async () => {
  // Fetch user data from your database or external API
  const response = await fetch(
    "https://api.nzbplanet.net/api?apikey=1af02d85bc38ededa87cbd56dc54a3d7&o=json&t=movie&q=varsity%20blues",
  );
  // Return the data as a JSON response
  return (await response.json()) as MovieInfo;
};
const getMoviePosters = async () => {
  // Fetch user data from your database or external API
  const response = await fetch(
    "https://api.themoviedb.org/3/search/movie?api_key=030e0502e2bbaa8bd7801e0316f05127&query=james%20bond",
  );
  // Return the data as a JSON response
  return (await response.json()) as MoviePosterInfo;
};

const Home = async () => {
  let movies = await getMovies();
  let movieposters = await getMoviePosters();

  return (
    <main
      className={
        "flex h-full flex-col items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800"
      }
    >
      <div className="space-y-6 pt-2">
        <h1
          className={cn(
            "text-6xl text-white font-bold drop-shadow-md",
            london_underground.className,
          )}
        >
          NZB Planet
        </h1>
      </div>
      <h2>MOVIES</h2>
      {movies?.channel.item.map((movie: MovieItem) => (
        <div key={movie.guid}>
          <p>{movie.title}</p>
          <p>{movie.pubDate}</p>
          <p>{movie.category}</p>
          <p>{movie.description}</p>
          <br />
        </div>
      ))}
      <h2>MOVIEPOSTERS</h2>
      {movieposters?.results.map((poster: MoviePoster) => (
        <div key={poster.id}>
          <Image
            src={`http://image.tmdb.org/t/p/w500${poster.poster_path}`}
            alt={poster.original_title}
            width={500}
            height={500}
          />
        </div>
      ))}
    </main>
  );
};
export default Home;
