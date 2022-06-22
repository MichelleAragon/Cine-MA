import axios from "axios";

async function discoverMovies() {
  try {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=a0b614dc81d82fa1960e7086518fa72d&sort_by=popularity.desc"
    );
    return data;

  } catch (error) {
    alert("Error: Movies can not be loaded " + error);
  }
}

export { discoverMovies };
