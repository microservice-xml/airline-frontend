import { makeParametersList, request } from "./../base/HTTP";
import HttpMethod from "../../constants/HttpMethod";

export async function getAllArticles() {
  return await request("/news");
}

export async function getRandomArticle() {
  return await request("/news/random");
}

export async function getSearchValues(parameters: any) {
  console.log("/flight/search" + makeParametersList(parameters));
  return await request("/flight/search" + makeParametersList(parameters));
}
