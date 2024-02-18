import {AppShell, ScrollArea} from '@mantine/core';
import React from 'react';

import {LinksGroup} from './LinksGroup';
import {linksGroupData} from './LinksGroup/linksGroupData';
import classes from './index.module.css';

interface Props {
  closeMobile: () => void;
}
export const Navbar: React.FC<Props> = props => {
  const {closeMobile} = props;
  return (
    <AppShell.Navbar p="md">
      <ScrollArea className={classes.links}>
        {linksGroupData.map(item => (
          <LinksGroup {...item} closeMobile={closeMobile} key={item.label} />
        ))}
      </ScrollArea>
    </AppShell.Navbar>
  );
};
