import { Octokit } from "octokit";

export const octokit = new Octokit({
    auth: process.env.LEET_CODE,
});

