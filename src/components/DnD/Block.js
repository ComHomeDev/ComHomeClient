import { memo } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes.js";
const style = {
  border: "1px dashed gray",
  padding: "0.5rem 1rem",
  marginBottom: ".5rem",
  marginLeft: "20px",
  marginRight: "20px",
  backgroundColor: "white",
  width: "300px",
  height: "300px",
};

const handleStyle = {
  backgroundColor: "green",
  width: "100%",
  height: "1rem",
  display: "block",
  marginRight: "0.75rem",
  cursor: "move",
};
export const Block = memo(function Card({ id, item, moveCard, findCard }) {
  const originalIndex = findCard(id).index;

  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: ItemTypes.CARD,
      item: { id, originalIndex },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const { id: droppedId, originalIndex } = item;
        const didDrop = monitor.didDrop();
        if (!didDrop) {
          moveCard(droppedId, originalIndex);
        }
      },
    }),
    [id, originalIndex, moveCard]
  );
  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.CARD,
      hover({ id: draggedId }) {
        if (draggedId !== id) {
          const { index: overIndex } = findCard(id);
          moveCard(draggedId, overIndex);
        }
      },
    }),
    [findCard, moveCard]
  );
  const opacity = isDragging ? 0.4 : 1;
  return (
    <div ref={preview} style={{ ...style, opacity }}>
      <div ref={(node) => drag(drop(node))} style={handleStyle} />
      {item.ability}
    </div>
  );
});
