import { useCallback } from 'react';

export const useRipple = () => {
  const createRipple = useCallback((event) => {
    const button = event.currentTarget;
    const ripple = document.createElement('span');

    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    const rect = button.getBoundingClientRect();
    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${event.clientX - rect.left - radius}px`;
    ripple.style.top = `${event.clientY - rect.top - radius}px`;
    ripple.classList.add('ripple');

    const rippleElement = button.getElementsByClassName('ripple')[0];
    if (rippleElement) {
      rippleElement.remove();
    }

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  }, []);

  return createRipple;
};
