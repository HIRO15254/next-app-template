'use client';

import {useSession} from 'next-auth/react';
import React from 'react';

import {Presentation} from './presentation';

interface Props {
  hasNavbar?: boolean;
  children: React.ReactNode;
}

export const CustomAppShell = (props: Props) => {
  const {children, ...other} = props;
  const {data: sessionData} = useSession();
  return (
    <Presentation sessionData={sessionData || undefined} {...props} {...other}>
      {children}
    </Presentation>
  );
};
