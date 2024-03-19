import {useState} from 'react';

import {DESKTOP_BREAKPOINT} from '../../const/layoutConfig';

interface InactiveBurgerData {
  hasBurger: false;
  burger: undefined;
}

interface ActiveBurgerData {
  hasBurger: true;
  burger: {
    opened: {
      mobile: boolean;
      desktop: boolean;
    };
    onClick: {
      mobile: () => void;
      desktop: () => void;
    };
  };
}

export type BurgerData = InactiveBurgerData | ActiveBurgerData;

type Props = {
  active: boolean;
};

export const useNavbar = (props: Props) => {
  const {active} = props;
  const [mobileOpened, setMobileOpened] = useState(false);
  const [desktopOpened, setDesktopOpened] = useState(true);

  const navbarProps = {
    breakpoint: DESKTOP_BREAKPOINT,
    collapsed: {
      mobile: !active || !mobileOpened,
      desktop: !active || !desktopOpened,
    },
  };

  const activeBurgerData: ActiveBurgerData = {
    hasBurger: true,
    burger: {
      opened: {
        mobile: mobileOpened,
        desktop: desktopOpened,
      },
      onClick: {
        mobile: () => setMobileOpened(o => !o),
        desktop: () => setDesktopOpened(o => !o),
      },
    },
  };

  const inactiveBurgerData: InactiveBurgerData = {
    hasBurger: false,
    burger: undefined,
  };

  const burgerData: BurgerData = active ? activeBurgerData : inactiveBurgerData;

  const closeMobile = () => setMobileOpened(false);

  return {
    navbarProps,
    burgerData,
    closeMobile,
  };
};
