import React from 'react';

import {auth} from 'lib/nextAuth';

import {Presentation} from './presentation';

interface Props {
  hasNavbar?: boolean;
  children: React.ReactNode;
}

export const CustomAppShell = async (props: Props) => {
  const {children, ...other} = props;
  const sessionData = await auth();
  return (
    <Presentation sessionData={sessionData || undefined} {...props} {...other}>
      {children}
    </Presentation>
  );
};
