import React from 'react';

import {auth} from 'lib/nextAuth';

import {Presentation} from './presentation';

interface Props {
  hasNavbar?: boolean;
  children: React.ReactNode;
}

export const CustomAppShell = async (props: Props) => {
  const {children, ...other} = props;
  const session = await auth();
  return (
    <Presentation sessionData={session || undefined} {...props} {...other}>
      {children}
    </Presentation>
  );
};
