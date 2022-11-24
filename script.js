{
  /* <div id="joke" class="joke">Awesome joke is loading...</div> */
}
{
  /* <buttton id="jokeBtn" class="btn">Next JOKE</buttton> */
}

// //  what is PROMISES
// // GET https://icanhazdadjoke.com/

// const jokes = document.querySelector("#joke");
// const jokeBtn = document.querySelector("#jokeBtn");

// const generateJokes = () => {
//   const setHeaders = {
//     headers: {
//       Accept: "application/json",
//     },
//   };

//   fetch("https://icanhazdadjoke.com", setHeaders)
//     .then((res) => res.json())
//     .then((data)=>{
//         jokes.innerHTML=data.joke
//     }).catch((error) => {
//       console.log(error);
//     });
// };

// jokeBtn.addEventListener("click", generateJokes);
// generateJokes();

const jokes = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");

const generateJokes = async () => {
  try {
    const setHeaders = {
      headers: {
        Accept: "application/json",
      },
    };

    const res = await fetch("https://icanhazdadjoke.com", setHeaders);

    const data = await res.json();
    jokes.innerHTML = data.joke;
  } catch (error) {
    console.log(`The error is ${err}`);
  }
};

jokeBtn.addEventListener("click", generateJokes);
generateJokes();
