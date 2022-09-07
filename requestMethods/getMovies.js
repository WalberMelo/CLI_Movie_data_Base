import api_key from "../api_key.js";
import ora from "ora";
import https from "https";
import chalk from "chalk";

const getMovies = (props) => {
  const { popular, page, nowPlaying } = props;

  //! UNDERFINED props
  console.log(popular); //undefined
  console.log(page);
  console.log(nowPlaying); //undefined

  const endpoint = popular
    ? "/popular"
    : nowPlaying
    ? "/now_playing"
    : popular && nowPlaying
    ? "/"
    : "";

  console.log(
    `https://api.themoviedb.org/3/movie${endpoint}?page=${page}&api_key=${api_key}`
  );
  https
    .get(
      `https://api.themoviedb.org/3/movie${endpoint}?page=${page}&api_key=${api_key}`,

      (res) => {
        console.log(`status code: ${res.statusCode}`);

        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });

        // render response of the movies
        res.on("end", () => {
          console.log("\n\nResultados: \n");
          console.log(JSON.parse(data));
          // JSON.parse(data).results.map((movie) => {
          //   console.log(
          //     chalk.white(
          //       "-------------------------------------------------- \n\n" +
          //         "Movie: \n\n" +
          //         "ID: " +
          //         movie.id +
          //         "\nTitle: " +
          //         chalk.cyan.bold(movie.title) +
          //         "\nRelease date: " +
          //         movie.release_date +
          //         "\n\n"
          //     )
          //   );
          // });
          // console.log(
          //   chalk.white(
          //     "--------------------------------------------------" +
          //       "\n\nPage: " +
          //       page +
          //       " of: " +
          //       JSON.parse(body).total_pages
          //   )
          // );
        });
      }
    )
    .on("error", (err) => {
      ora.fail(err.message);
    })
    .end();
};

export default getMovies;
