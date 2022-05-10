import React, { ReactElement, useState } from 'react';
import { useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { DragCard, PlaceHolderCard, IDragCardProps } from '../Card';
import { ICard, Dispatch } from '../../store';

interface Props {
  cards: ICard[]
  index: number
}

export default function ListBody({ cards, index }: Props) {
  const dispatch = useDispatch<Dispatch>();
  const [placeholderIndex, setPlaceholderIndex] = useState(-2);
  const [{ isOver, item }, drop] = useDrop({
    accept: 'card',
    hover: (_, monitor) => {
      const { x, y } = monitor.getClientOffset()!;

      const els = document.elementsFromPoint(x, y);
      const el = els.find((iel) => iel.classList.contains('card'));

      if (!el) {
        return;
      }

      const rect = el.getBoundingClientRect();
      const cardIndex = Number((el as HTMLDivElement).dataset.index);
      let posIndex = placeholderIndex;

      posIndex = y >= (rect.top + rect.height / 2) ? cardIndex + 1 : cardIndex;

      setPlaceholderIndex(posIndex);
    },
    drop: (_, monitor) => {
      const { card, x } = monitor.getItem<IDragCardProps>();
      const from = { x, card };
      const to = { x: index, y: placeholderIndex };

      dispatch.lists.moveCard({ from, to });
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      item: monitor.getItem<IDragCardProps>(),
    }),
  });

  const render = () => {
    const list: ReactElement[] = [];
    cards.forEach((card, i) => {
      if ((isOver && placeholderIndex === i)) {
        list.push(<PlaceHolderCard key="placeholder" card={item.card} />);
      }

      if (!isOver || (item && card.id !== item.card.id)) {
        list.push(
          <DragCard
            key={card.id}
            card={card}
            x={index}
            y={i}
            placeholder={item && card.id === item.card.id}
          />,
        );
      }
    });

    if (isOver && (!cards.length || placeholderIndex === cards.length)) {
      list.push(<PlaceHolderCard key="placeholder" card={item.card} />);
    }

    return list;
  };

  return (
    <div
      ref={drop}
      className="flex-grow overflow-x-hidden overflow-y-auto mx-1 px-1"
    >
      {render()}
    </div>
  );
}
