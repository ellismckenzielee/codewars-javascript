/*Codewars Leaderboard
https://www.codewars.com/kata/5a57d101cadebf03d40000b9
*/
const https = require("https");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const getLeaderboardHonor = async () => {
  const url = "https://www.codewars.com/users/leaderboard";
  const res = await getData(url);
  return res.map((item) => {
    return parseInt(item.split(",").join(""));
  });
};

const getData = (url) => {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let response = "";
      const kata = [];

      let dom;
      res.on("data", (data) => {
        response += data.toString();
      });

      res.on("end", (data) => {
        dom = new JSDOM(response);
        const elements = dom.window.document.querySelectorAll("tr");
        elements.forEach((element) => {
          const innerHTML = element.lastChild.innerHTML;
          if (innerHTML !== "Honor") {
            kata.push(element.lastChild.innerHTML);
          }
        });
        resolve(kata);
      });
    });
  });
};
