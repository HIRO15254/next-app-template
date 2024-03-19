import {AppShell, ScrollArea} from '@mantine/core';
import React from 'react';

import {LinksGroup} from './LinksGroup';
import {linksGroupData} from './LinksGroup/linksGroupData';
import classes from './index.module.css';

interface Props {
  onClick?: () => void;
}
export const Presentation: React.FC<Props> = props => {
  const {onClick} = props;
  return (
    <AppShell.Navbar p="md">
      <ScrollArea className={classes.links}>
        {linksGroupData.map(item => (
          <LinksGroup {...item} onClick={onClick} key={item.label} />
        ))}
      </ScrollArea>
    </AppShell.Navbar>
  );
};
