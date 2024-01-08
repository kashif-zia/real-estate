/**
 * It returns the data from the given url
 * @param url - The URL to make the request to.
 * @returns a promise.
 */
import axios from "axios";

export async function getData(url) {
  try {
    return await axios.get(url);
  } catch (error) {
    console.error("Error", error);
    alert(`${"data is not fetched !! check console.............!!imp Note: plz run application on http://localhost:3000/"}`);
  }
}
