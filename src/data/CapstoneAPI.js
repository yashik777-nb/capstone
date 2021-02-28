import axios from "axios";
import { uuid } from "uuidv4";

export default class CapstoneAPI {
  static async getAllIssues() {
    return await axios
      .get("http://localhost:3001/issues")
      .then((response) => response.data)
      .catch((error) => console.log(error));
  }

  static async addIssue(issue) {
    issue.id = uuid();
    return await axios
      .post("http://localhost:3001/issues", issue)
      .then((res) => issue)
      .catch((err) => console.log(err));
  }

  // User Services
  static async checkUser(username) {
    return await axios
      .get(`http://localhost:3001/users/`)
      .then((res) => res.data.filter((user) => user.username === username))
      .catch((err) => console.log(err));
  }

  static async addUser(user) {
    user.id = uuid();
    return await axios
      .post(`http://localhost:3001/users`, user)
      .then((res) => user)
      .catch((err) => console.log(err));
  }
}
