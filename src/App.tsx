import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GrenreList from "./components/GrenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platforms: Platform | null;
  order: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        large: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GrenreList
            onSelectGenre={(genre) =>
              setGameQuery({ ...gameQuery, genre: genre })
            }
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack paddingLeft={3} marginBottom={5} spacing={5}>
          <PlatformSelector
            platformSelect={(platform) =>
              setGameQuery({ ...gameQuery, platforms: platform })
            }
            selectedPlatform={gameQuery.platforms}
          />
          <SortSelector
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, order: sortOrder })
            }
            selectedSortOrder={gameQuery.order}
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
