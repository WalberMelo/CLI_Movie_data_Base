# getMovie

OPTIONS
.requiredOption("-i, --id <n>")
.option("-r, --reviews", [false])

COMMANDS
node moviedb.js get-movie -i 100 true

---

# getMovies

OPTIONS
.option("-p, --popular", [false])
.option("-n, --now-playing", [false],

COMMANDS
node moviedb.js get-persons --page 1 -p
node moviedb.js get-movies -p --page 1

---

# getPerson

OPTIONS
.requiredOption("-i, --id <num>")

COMMANDS
node moviedb.js get-person -i 408

---

# getPersons

OPTIONS
.requiredOption("--page <number>")
.requiredOption("-p, --popular",)

COMMANDS
node moviedb.js get-persons --page 1 -p
