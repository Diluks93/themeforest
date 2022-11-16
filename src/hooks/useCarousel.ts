import { useCallback, useState } from 'react';

export function useCarousel<T>(items: T[]) {
  const [cards, setCards] = useState(items);

  const handleRightClick = useCallback(() => {
    const firstItem = cards.shift();

    if (firstItem) {
      cards.push(firstItem);
    }

    setCards([...cards]);
  }, [cards]);

  const handleLeftClick = useCallback(() => {
    const lastItem = cards.pop();

    if (lastItem) {
      cards.unshift(lastItem);
    }

    setCards([...cards]);
  }, [cards]);

  return {
    handleRightClick,
    handleLeftClick,
    cards,
  };
}
