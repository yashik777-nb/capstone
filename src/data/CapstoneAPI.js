import axios from "axios";
import { uuid } from "uuidv4";

export default class CapstoneAPI {
  static getAllIssues() {
    return axios
      .get("http://localhost:3001/issues")
      .then((response) => response.data)
      .catch((error) => console.log(error));
  }

  static addIssue(issue) {
    issue.id = uuid();
    return axios
      .post("http://localhost:3001/issues", issue)
      .then((res) => issue)
      .catch((err) => console.log(err));
  }

  // User Services
  static checkUser(id) {
    return axios
      .get(`http://localhost:3001/users/${id}`)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }
}
