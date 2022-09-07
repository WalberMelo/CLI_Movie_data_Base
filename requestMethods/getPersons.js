import api_key from "../api_key.js";
import ora from "ora";
import https from "https";
import chalk from "chalk";

const getPersons = (options) => {
  console.log(options);
  // options.page = number of page
  // popular hard code because must be always true
  https
    .get(
      `https://api.themoviedb.org/3/person/popular?api_key=${api_key}&language=es-ES&query=popular&page=${options.page}`,
      (res) => {
        let data = "";

        res.on("data", (chunk) => {
          data += chunk;
        });

        // Ending the response of the persons
        res.on("end", () => {
          JSON.parse(data).results.map((person) => {
            let department =
              person.known_for_department === "Acting"
                ? "\nDepartment: " + chalk.magenta(person.known_for_department)
                : "";
            console.log(
              chalk.white(
                "-------------------------------------------------- \n\n" +
                  "Person: \n\n" +
                  "ID: " +
                  person.id +
                  "\nName: " +
                  chalk.cyan.bold(person.name) +
                  department +
                  "\n\nAppearing in movies: \n\n\n" +
                  person.known_for.map((movie) => {
                    return (
                      "\tMovie: \n" +
                      "\tID: " +
                      movie.id +
                      "\n\tRelease date: " +
                      movie.release_date +
                      "\n\tTitle: " +
                      movie.title +
                      "\n\n"
                    );
                  })
              )
            );
          });
        });
      }
    )
    .on("error", (err) => {
      //!Error
      ora.fail("Load failed", err);
    })
    .end();
};

export default getPersons;
