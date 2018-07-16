import { Repo } from "./Repo";

export class User {
    login: string;
    fullname: string;
    repoCount: number;
    followerCount: number;
    repos: Repo[];
}