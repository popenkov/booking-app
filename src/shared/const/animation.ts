type BurgerButtonAnimation = {
  hidden: {
    width: number | string;
    visibility: 'hidden' | 'visible';
    onanimationend: {
      display: string;
    };
  };
  visible: {
    display: string;
    width: number | string;
    visibility: 'hidden' | 'visible';
  };
};

export const burgerButtonAnimation: BurgerButtonAnimation = {
  hidden: {
    width: 0,
    visibility: 'hidden',
    onanimationend: {
      display: 'none',
    },
  },
  visible: {
    display: 'block',
    width: 'auto',
    visibility: 'visible',
  },
};
