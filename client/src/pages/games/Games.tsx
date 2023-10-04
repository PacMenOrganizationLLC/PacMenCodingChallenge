import { useEffect, useState } from "react";
import { useGetGamesQuery } from "./gameHooks";
import { Game } from "../../models/Games";
import { GameList } from "./GameList";
import { GameDetails } from "./GameDetails";
import { GameEditorModal } from "./GameEditorModal";

export const Games = () => {
  const [selectedGame, setSelectedGame] = useState<Game>()
  const gamesQuery = useGetGamesQuery();
  const games = gamesQuery.data ?? [];

  useEffect(() => {
    if (gamesQuery.data && gamesQuery.data.length > 0) {
      setSelectedGame(gamesQuery.data[0])
    }
  }, [gamesQuery.data])
  return (
    <div className="container">
      <h1 className="text-center">Games</h1>
      <div className="row">
        <div className="col-4">
          <GameList games={games}
            selectedGame={selectedGame}
            setSelectedGame={setSelectedGame} />
          <div className="text-center my-2">
            <GameEditorModal setSelectedGame={setSelectedGame} />
          </div>
        </div>
        {selectedGame && (
          <GameDetails selectedGame={selectedGame}
            setSelectedGame={setSelectedGame} />
        )}
      </div>
    </div>
  );
};
