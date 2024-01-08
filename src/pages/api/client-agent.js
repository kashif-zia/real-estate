import { clientAgentData } from "../../../public/API-Data/clientAgent";

export default function handler(req, res) {
  try {
    res.status(200).json(clientAgentData);
  } catch (err) {
    console.log(err.message);
    alert("Data is not fetch!!! Please check console!!!");
  }
}
