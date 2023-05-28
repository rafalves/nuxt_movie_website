import { Movie } from "~/types/Movie";

export type APIResponse = {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}