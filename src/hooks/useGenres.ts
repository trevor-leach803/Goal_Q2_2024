
import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  background_image: string;
  games_count: number;
  image_background: string;
}

const useGenres = () => useData<Genre>('/genres')

export default useGenres