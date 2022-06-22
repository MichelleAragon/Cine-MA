import axios from "axios";

async function searchMovies(query) {
  try {
    const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=a0b614dc81d82fa1960e7086518fa72d&query=${query}`
    );
    return data;

  } catch (error) {
    alert("Error: Movies can not be loaded " + error);
  }
}

export { searchMovies };
