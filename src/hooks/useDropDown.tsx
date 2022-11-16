import React, {
  ReactNode,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { Dropdown } from 'components';
import { PathsToPage } from 'constants/';

export const useDropdown = () => {
  const containerRef = useRef<HTMLUListElement | HTMLButtonElement>(null);
  const [isOpen, setOpen] = useState(false);
  const [element, setElement] = useState<
    HTMLUListElement | HTMLButtonElement | null
  >(null);

  useLayoutEffect(() => {
    setElement(containerRef.current);
  }, []);

  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  const setOpenFalse = useCallback(() => setOpen(false), []);

  const links = useMemo(
    () => [
      PathsToPage.HOME,
      PathsToPage.SOLUTIONS,
      PathsToPage.ELEMENTS,
      PathsToPage.BLOG,
      PathsToPage.CONTACTS,
      PathsToPage.TEAM,
      PathsToPage.ABOUT_US,
      PathsToPage.SERVICES,
      PathsToPage.FAQ,
    ],
    []
  );

  const renderDropdown = (children: ReactNode) =>
    element && (
      <Dropdown
        isOpen={isOpen}
        trigger={children}
        menu={links}
        element={element}
        toggle={toggleOpen}
      />
    );

  return {
    containerRef,
    links,
    isOpen,
    toggleOpen,
    setOpenFalse,
    renderDropdown,
  };
};
