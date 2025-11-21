const fs = require("fs");

try {
  const jsonData = fs.readFileSync("./data/user.json", "utf-8");
  //  console.log(jsonData);
  const data = JSON.parse(jsonData);
  console.log(data);
} catch (error) {
  console.error(error.message);
}

fs.readFile("./data/user.json", "utf-8", (error, JSONdata) => {
  if (error) {
    console.error(error.message);
  }
  const user = JSON.parse(JSONdata);
  console.log(user);
});
