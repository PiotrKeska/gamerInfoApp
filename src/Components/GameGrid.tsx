import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GamCardContainer from "./GamCardContainer";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
        spacing={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GamCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GamCardContainer>
          ))}
        {data.map((game) => (
          <GamCardContainer key={game.id}>
            <GameCard game={game} />
          </GamCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
