import { octokit } from '../github';


export const getData = async () => {
    await octokit.request("GET /repos/mawglih/", {
    owner: "github",
    repo: "docs",
    per_page: 2
  });
}