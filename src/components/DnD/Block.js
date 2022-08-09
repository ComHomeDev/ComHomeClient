import { memo, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes.js";
import styled from "styled-components";
import { IoIosArrowUp } from "react-icons/io";

const styles = {
  border: "1px dashed gray",
  padding: "10px",
  marginTop: "30px",
  marginBottom: "30px",
  marginLeft: "10px",
  marginRight: "10px",
  backgroundColor: "white",
};

const handleStyle = {
  backgroundColor: "#ededed",
  width: "100%",
  height: "1.5rem",
  display: "block",
  marginRight: "0.75rem",
  fontSize: "12px",
  textAlign: "center",
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
    <div ref={preview} style={{ ...styles, opacity }}>
      <div ref={(node) => drag(drop(node))} style={handleStyle}>
        여기를 잡고 움직여 교육과정을 비교해보세요!
      </div>
      <DnDCard item={item} />
    </div>
  );
});

function DnDCard({ item }) {
  const [toggle, setToggle] = useState(false);
  return (
    <BlockStyle className="dndCard">
      <div className="dnd-title-box">
        <div className="dnd-title">{item.name}</div>
        <div className="dnd-ability"> {item.ability}</div>
        {toggle && (
          <div className="dnd-detail-info">
            <li>진출 세부 분야</li>
            {item.detail}
          </div>
        )}
        <IoIosArrowUp
          onClick={() => setToggle(!toggle)}
          style={{
            position: "absolute",
            transform: toggle ? "rotate(0deg)" : "rotate(180deg)",
            right: "15px",
            top: "20px",
            width: "20px",
            height: "20px",
            cursor: "pointer",
          }}
        />
      </div>
      <div className="dnd-content">
        <div className="dnd-grade">
          {item.grade.map((value, i) => {
            return (
              <ul key={value + i} className="dnd-class-container">
                <div className="dnd-class-grade">{i + 1}학년</div>
                {value.class.map((c) => {
                  return (
                    <li key={Math.random()} className="dnd-class">
                      {c.name}{" "}
                      <span className={`dnd-term d${c.term}`}>{c.term}</span>
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
        <div className="dnd-extra">
          <ul className="dnd-class-container">
            <div className="dnd-class-grade dnd-extra-title">
              추천 비교과과목 및 타전공 과목
            </div>

            {item.extracurri.map((ex) => {
              return (
                <li key={Math.random()} className="dnd-class">
                  {ex}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </BlockStyle>
  );
}
const BlockStyle = styled.div`
  position: relative;
  width: 300px;

  .dnd-grade {
    height: 550px;
  }
  .dnd-title-box {
    padding: 10px;
    background-color: #d9d9d9;
    position: absolute;
    width: calc(100% - 20px);
  }
  .dnd-title {
    font-size: 16px;
    font-weight: 500;
  }
  .dnd-ability {
    font-size: 12px;
    font-weight: 300;
    color: #404040;
  }
  .dnd-detail-info {
    padding-top: 10px;
    font-size: 13px;
    padding-bottom: 10px;
  }
  .dnd-detail-info li {
    font-size: 14px;
    padding-bottom: 7px;
  }
  .dnd-content {
    padding-top: 50px;
  }

  .dnd-class-container {
    margin-bottom: 40px;
  }
  .dnd-class-grade {
    padding-bottom: 5px;
    margin-left: -20px;
    border-bottom: 1px solid #d9d9d9;
    margin-bottom: 5px;
  }
  .dnd-class {
    font-size: 13px;
  }
  .dnd-term {
    margin-left: 10px;
    border-radius: 5px;
    padding: 0 5px;
  }

  .dnd-extra-title {
    font-size: 14px;
  }
  // .dnd-extra-title .dnd-term{

  // }
  .d1-1 {
    background-color: #f1f1ef;
  }
  .d1-2 {
    background-color: #f4eeee;
  }
  .d2-1 {
    background-color: #fbecdd;
  }
  .d2-2 {
    background-color: #edf3ec;
  }
  .d3-1 {
    background-color: #fbf3db;
  }
  .d3-2 {
    background-color: #f6f3f9;
  }
  .d4-1 {
    background-color: #e7f3f8;
  }
  .d4-2 {
    background-color: #fdebec;
  }
`;
