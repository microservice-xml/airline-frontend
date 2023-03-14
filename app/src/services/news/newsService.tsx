import { request } from "./../base/HTTP";
import HttpMethod from "../../constants/HttpMethod";

export async function getAllArticles() {
    return await request("/news");
}