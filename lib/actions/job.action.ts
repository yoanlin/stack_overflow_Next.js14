"use server";

import { GetAllJobsParams } from "./shared.types";

export async function getAllJobs(params: GetAllJobsParams) {
  // const { query = "", location = "", page = 1, pageSize = 10 } = params;
  // try {
  //   let url = `https://jsearch.p.rapidapi.com/search?query=web%20developer%20in%20Taiwan&page=${page}&num_pages=1&date_posted=all`;
  //   if (query || location) {
  //     url = `https://jsearch.p.rapidapi.com/search?query=${query}%20in%20${location}&page=${page}&num_pages=1&date_posted=all`;
  //   }
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "x-rapidapi-key": "14a61c77efmshc3beb6c8b16da33p1d1feajsn82cccfdbf2f5",
  //       "x-rapidapi-host": "jsearch.p.rapidapi.com",
  //       "X-RapidAPI-Mock-Response": "201",
  //     },
  //   };
  //   const response = await fetch(url, options);
  //   const job = await response.json();
  //   return job;
  // } catch (error) {
  //   console.log(error);
  //   throw error;
  // }
}
