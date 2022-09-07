import ora from "ora";
import { Command } from "commander";
import getPersons from "./requestMethods/getPersons.js";
import getPerson from "./requestMethods/getPerson.js";
import getMovie from "./requestMethods/getMovie.js";
import getMovies from "./requestMethods/getMovies.js";

const program = new Command();

program.version("0.0.1");

program
  /* command */
  .command("get-persons")
  .description("Make a network request to fetch the most popular persons")
  /* options */
  .usage("[options]")
  .requiredOption(
    "--page <number>",
    "The page of persons data results to fetch"
  )
  .requiredOption("-p, --popular", "Fetch the popular persons")
  .action((options) => {
    const spinner = ora(`Fetching the popular person's data...`).start();
    setTimeout(() => {
      getPersons(options);
      spinner.color = "yellow";
      spinner.text = "Loading rainbows";
    }, 2000);
    setTimeout(() => {
      spinner.succeed("Data loaded successfully.");
    }, 2100);
  });

program
  .command("get-person")
  .description("Make a network request to fetch the data of a single person")
  .requiredOption("-i, --id <num>", "The id of the person")
  .action((props) => {
    const spinner = ora("Fetching the person data...").start();
    setTimeout(() => {
      getPerson(props);
      spinner.stop();
    }, 2000);
    setTimeout(() => {
      ora("Person data loaded").succeed();
    }, 2100);
  });

program
  .command("get-movie")
  .description("Make a network request to fetch the data of a single movie")
  .requiredOption("-i, --id <n>", "The id of the movie")
  .option("-r, --reviews", "Fetch the reviews of the movie", false)
  .action((props) => {
    const spinner = ora("Fetching the movie data...").start();
    setTimeout(() => {
      getMovie(props);
      spinner.stop();
    }, 2000);
    setTimeout(() => {
      ora("Movie data loaded").succeed();
    }, 2100);
  });

program
  .command("get-movies")
  .description("Make a network request to fetch movies")
  .requiredOption(
    "--page <n>",
    "The page of movies data results to fetch",
    parseInt
  )
  .option("-p, --popular", "Fetch the popular movies", false)
  .option("-n, --now-playing", "Fetch the movies that are playing now", false)
  .action((props) => {
    const spinner = ora("Fetching the movies data...").start();
    setTimeout(() => {
      getMovies(props);
      console.log(props);
      spinner.stop();
    }, 2000);
    setTimeout(() => {
      ora("Movies data loaded").succeed();
    }, 2100);
  });

program.parse(process.argv);
