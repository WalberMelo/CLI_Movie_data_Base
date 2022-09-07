import api_key from "../api_key.js";
import ora from "ora";
import https from "https";
import chalk from "chalk";

const getMovie = (props) => {
  console.log(props);
  const { id, reviews } = props;

  const review = reviews ? "/reviews" : "";

  https
    .get(
      `https://api.themoviedb.org/3/movie/${id}${review}?api_key=${api_key}`,

      (res) => {
        let data = "";
        console.log(`status code: ${res.statusCode}`);

        res.on("data", (chunk) => {
          data += chunk;
        });

        // render response of the movies
        res.on("end", () => {
          let movie = JSON.parse(data);

          let genres =
            movie.genres.length > 0
              ? "\nGenres: \n\n" +
                movie.genres.map((genre) => {
                  return genre.name + "\n";
                })
              : "\nGenres: " +
                chalk.yellow("The movie doesn't have a declared genre");

          let languages =
            movie.spoken_languages.length > 0
              ? "\nLanguages: \n\n" +
                movie.spoken_languages.map((language) => {
                  return language.name + "\n";
                })
              : "\n\nLanguages: " +
                chalk.yellow(
                  "The movie: ${movie.title} doesn't have any declared language"
                );

          console.log("\n\nResultados: \n");
          console.log(
            chalk.white(
              "-------------------------------------------------- \n\n" +
                "Movie: \n\n" +
                "ID: " +
                movie.id +
                "\nTitle: " +
                chalk.cyan.bold(movie.title) +
                "\nRelease date: " +
                movie.release_date +
                "\nRuntime: " +
                movie.runtime +
                "\nVote count: " +
                movie.vote_count +
                "\nOverview: " +
                movie.overview +
                "\n\n" +
                genres +
                languages
            )
          );
        });
      }
    )
    .on("error", (err) => {
      //!Error
      ora.fail("Load failed", err);
    })
    .end();
};

export default getMovie;
