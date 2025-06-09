import { useState, useEffect } from 'react';

interface OverScrollState {
  overScrolledAtTop: boolean;
  overScrolledAtBottom: boolean;
  isAtTop: boolean;
  isAtBottom: boolean;
}

function useOverScroll(minWidth: number = 768): OverScrollState {
  const [overScrollState, setOverScrollState] = useState<OverScrollState>({
    overScrolledAtTop: false,
    overScrolledAtBottom: false,
    isAtTop: false,
    isAtBottom: false,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Always apply logic (no minWidth restriction)
    const shouldApplyLogic = (): boolean => window.innerWidth >= minWidth;

    // Touch handling for mobile
    let touchStartY = 0;
    let touchMoveY = 0;

    const getScrollInfo = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      const atTop = scrollTop <= 0;
      const atBottom = scrollTop + windowHeight >= docHeight - 1; // -1 for pixel precision

      return { scrollTop, windowHeight, docHeight, atTop, atBottom };
    };

    const updateScrollState = (
      atTop: boolean,
      atBottom: boolean,
      overScrolledAtTop: boolean = false,
      overScrolledAtBottom: boolean = false
    ) => {
      setOverScrollState((prev) => ({
        ...prev,
        isAtTop: atTop,
        isAtBottom: atBottom,
        overScrolledAtTop,
        overScrolledAtBottom,
      }));
    };

    // Mouse wheel handler
    const onWheel = (event: WheelEvent) => {
      if (!shouldApplyLogic()) return;

      const { atTop, atBottom } = getScrollInfo();
      const isScrollingUp = event.deltaY < 0;
      const isScrollingDown = event.deltaY > 0;

      if (atTop && isScrollingUp) {
        updateScrollState(atTop, atBottom, true, false);
        return;
      }

      if (atBottom && isScrollingDown) {
        updateScrollState(atTop, atBottom, false, true);
        return;
      }

      updateScrollState(atTop, atBottom, false, false);
    };

    // Touch start handler
    const onTouchStart = (event: TouchEvent) => {
      if (!shouldApplyLogic()) return;

      touchStartY = event.touches[0].clientY;
    };

    // Touch move handler
    const onTouchMove = (event: TouchEvent) => {
      if (!shouldApplyLogic()) return;

      touchMoveY = event.touches[0].clientY;
      const touchDelta = touchStartY - touchMoveY;

      if (Math.abs(touchDelta) > 5) {
        const { atTop, atBottom } = getScrollInfo();

        const isScrollingUp = touchDelta < 0;
        const isScrollingDown = touchDelta > 0;

        if (atTop && isScrollingUp) {
          updateScrollState(atTop, atBottom, true, false);
          return;
        }

        if (atBottom && isScrollingDown) {
          updateScrollState(atTop, atBottom, false, true);
          return;
        }

        updateScrollState(atTop, atBottom, false, false);
      }
    };

    // Touch end handler
    const onTouchEnd = () => {
      if (!shouldApplyLogic()) return;

      touchStartY = 0;
      touchMoveY = 0;
    };

    // Regular scroll handler
    const onScroll = () => {
      if (!shouldApplyLogic()) return;

      const { atTop, atBottom } = getScrollInfo();

      if (!atTop && !atBottom) {
        updateScrollState(atTop, atBottom, false, false);
      } else {
        updateScrollState(atTop, atBottom, false, false);
      }
    };

    // Resize handler
    const onResize = () => {
      const { atTop, atBottom } = getScrollInfo();
      updateScrollState(atTop, atBottom, false, false);
    };

    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    // Initial state setup
    const { atTop, atBottom } = getScrollInfo();
    updateScrollState(atTop, atBottom, false, false);

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [minWidth]);

  return overScrollState;
}

export default useOverScroll;
