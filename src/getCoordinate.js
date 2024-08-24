// import { get } from "request";


//      get weather coordinates




// let options = {
//   method: "GET",
//   headers: { "x-api-key": "spQ0siXf+74cWEgW/T2I4w==DeFD6oK0Jh08mSCt" },
// };

// let url = `https://api.api-ninjas.com/v1/geocoding?city=${input}`;

// let data = await fetch(url, options)
//   .then((res) => res.json()) // parse response as JSON
//   .then((data) => {
//     // console.log(data);
//     return data;
//   })
//   .catch((err) => {
//     console.log(`error ${err}`);
//   });
// console.log(data);
// let lat = data[0].latitude;
// let lon = data[0].longitude;

let options = {
  method: "GET",
  headers: { "x-api-key": "spQ0siXf+74cWEgW/T2I4w==DeFD6oK0Jh08mSCt" },
};

let url = "https://api.api-ninjas.com/v1/geocoding?city=Delhi";

fetch(url, options)
  .then((res) => res.json()) // parse response as JSON
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });

// var city = "london";
// const API_KEY = "spQ0siXf+74cWEgW/T2I4w==DeFD6oK0Jh08mSCt";
// get(
//   {
//     url: "https://api.api-ninjas.com/v1/geocoding?city=" + city,
//     headers: {
//       "X-Api-Key": API_KEY,
//     },
//   },
//   function (error, response, body) {
//     if (error) return console.error("Request failed:", error);
//     else if (response.statusCode != 200)
//       return console.error(
//         "Error:",
//         response.statusCode,
//         body.toString("utf8")
//       );
//     else console.log(body);
//   }
// );

// export default body;
