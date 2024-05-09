import React, {ReactNode, useState} from 'react';

import {
  Group,
  Box,
  Collapse,
  ThemeIcon,
  UnstyledButton,
  Anchor,
  rem,
} from '@mantine/core';
import {Icon, IconChevronLeft} from '@tabler/icons-react';
import Link from 'next/link';

import {PUBLIC_TOP_URL} from '~/frontend/const/urls';

import classes from './index.module.css';

interface LinksProps {
  icon: ReactNode;
  label: string;
  initiallyOpened?: boolean;
  onClick?: () => void;
  link: {
    label: string;
    link: string;
  }[];
}

const Links = (props: LinksProps) => {
  const {icon, label, initiallyOpened, onClick, link} = props;
  const [opened, setOpened] = useState(initiallyOpened || false);

  return (
    <>
      <UnstyledButton
        onClick={() => setOpened(o => !o)}
        className={classes.control}
      >
        <Group justify="space-between" gap={0}>
          <Box style={{display: 'flex', alignItems: 'center'}}>
            <ThemeIcon variant="light" size={30}>
              {icon}
            </ThemeIcon>
            <Box ml="md">{label}</Box>
          </Box>
          <IconChevronLeft
            className={classes.chevron}
            stroke={1.5}
            style={{
              width: rem(16),
              height: rem(16),
              transform: opened ? 'rotate(-90deg)' : 'none',
            }}
          />
        </Group>
      </UnstyledButton>
      <Collapse in={opened}>
        {link.map(singleLink => (
          <Anchor
            component={Link}
            unstyled
            className={classes.link}
            href={singleLink.link}
            onClick={onClick}
            key={singleLink.label}
          >
            {singleLink.label}
          </Anchor>
        ))}
      </Collapse>
    </>
  );
};

interface LinkProps {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
  link: string;
}

const SingleLink = (props: LinkProps) => {
  const {icon, label, onClick, link} = props;
  return (
    <Anchor
      component={Link}
      unstyled
      href={link ?? PUBLIC_TOP_URL}
      onClick={onClick}
      className={classes.control}
    >
      <Box style={{display: 'flex', alignItems: 'center'}}>
        <ThemeIcon variant="light" size={30}>
          {icon}
        </ThemeIcon>
        <Box ml="md">{label}</Box>
      </Box>
    </Anchor>
  );
};

type Props = LinksProps | LinkProps;

export const LinksGroup: React.FC<Props> = props => {
  const {link, ...other} = props;
  const isLinks = Array.isArray(link);

  if (isLinks) {
    return <Links link={link} {...other} />;
  }
  return <SingleLink link={link} {...other} />;
};
