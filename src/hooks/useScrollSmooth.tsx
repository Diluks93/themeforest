import { useEffect, useRef } from 'react';

export function useScrollSmooth(id: string | undefined) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current && window.location.href.includes(id as string)) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'center',
      });
    }
  }, [id]);

  return ref;
}
