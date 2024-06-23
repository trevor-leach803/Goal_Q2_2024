
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
    id: number;
    name: string;
    slug:string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platform}[];
  metacritic: number;
}
  
const useGames = (genre: Genre | null, platform: Platform | null) => 
  useData<Game>('/games', [genre?.id, platform?.id],
    {params: {genres: genre?.id, 
      parent_platforms: platform?.id}})

export default useGames