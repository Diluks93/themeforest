import { useCallback, useEffect, useState } from 'react';

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

  useEffect(() => {
    const intervalId = setInterval(() => handleRightClick(), 5000);

    return () => clearInterval(intervalId);
  }, [handleRightClick]);

  return {
    handleRightClick,
    handleLeftClick,
    cards,
  };
}
