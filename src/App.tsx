import { Grid, GridItem, Flex, Show, Box, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GrenreList from "./components/GrenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platforms: Platform | null;
  order: string;
  searchText: string;
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
        <NavBar
          onSearch={(searchText) =>
            setGameQuery({ ...gameQuery, searchText: searchText })
          }
        />
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
        <Box paddingLeft={3}>
          <GameHeading gameQuery={gameQuery} />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector
                platformSelect={(platform) =>
                  setGameQuery({ ...gameQuery, platforms: platform })
                }
                selectedPlatform={gameQuery.platforms}
              />
            </Box>
            <SortSelector
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, order: sortOrder })
              }
              selectedSortOrder={gameQuery.order}
            />
          </Flex>
        </Box>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
