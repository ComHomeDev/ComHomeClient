import update from "immutability-helper";
import { memo, useCallback, useState } from "react";
import { useDrop } from "react-dnd";
import { Block } from "./Block.js";
import { ItemTypes } from "./ItemTypes.js";
import { curriculum } from "../../components/variables";

const style = {
  width: "100%",
  overflowX: "scroll",
  display: "flex",
  flexDirection: "row",
};

export const DnDContainer = memo(function DnDContainer() {
  const [cards, setCards] = useState(curriculum);
  const findCard = useCallback(
    (id) => {
      const card = cards.filter((c) => `${c.id}` === id)[0];
      return {
        card,
        index: cards.indexOf(card),
      };
    },
    [cards]
  );
  const moveCard = useCallback(
    (id, atIndex) => {
      const { card, index } = findCard(id);
      setCards(
        update(cards, {
          $splice: [
            [index, 1],
            [atIndex, 0, card],
          ],
        })
      );
    },
    [findCard, cards, setCards]
  );
  const [, drop] = useDrop(() => ({ accept: ItemTypes.CARD }));
  return (
    <div ref={drop} style={style}>
      &nbsp;&nbsp;
      {cards.map((card) => (
        <Block
          key={card.id}
          id={`${card.id}`}
          item={card}
          moveCard={moveCard}
          findCard={findCard}
        />
      ))}
    </div>
  );
});

export { DnDContainer as default } from "./DnDContainer.js";
