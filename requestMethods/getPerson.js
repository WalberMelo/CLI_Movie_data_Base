import api_key from "../api_key.js";
import ora from "ora";
import https from "https";
import chalk from "chalk";

const getPerson = (props) => {
  const { id } = props;
  https
    .get(
      `https://api.themoviedb.org/3/person/${id}?api_key=${api_key}`,
      (res) => {
        let data = "";

        res.on("data", (chunk) => {
          data += chunk;
        });

        // Ending the response of the persons
        res.on("end", () => {
          let person = JSON.parse(data);

          let department =
            person.known_for_department === "Acting"
              ? "\nDepartment: " + chalk.magenta(person.known_for_department)
              : "";

          let alsoKnown =
            person.also_known_as.length > 0
              ? "\n\nAlso known as: \n\n" +
                person.also_known_as.map((name) => {
                  return name + "\n";
                })
              : "\n\nAlso known as: \n\n" +
                chalk.yellow(person.name) +
                " doesn't have any alternate names\n";

          console.log(
            chalk.white(
              "-------------------------------------------------- \n\n" +
                "Person: \n\n" +
                "ID: " +
                person.id +
                "\nName: " +
                chalk.cyan.bold(person.name) +
                "\nBirthday: " +
                person.birthday +
                chalk.gray("|") +
                person.place_of_birth +
                department +
                "\nBiography: " +
                chalk.cyan.bold(person.biography) +
                alsoKnown +
                "\n\n--------------------------------------------------"
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

export default getPerson;
