import request from "../utils/request";
// import axios from "axios";

export async function queryUsers() {
  return request("/api/users");
}
