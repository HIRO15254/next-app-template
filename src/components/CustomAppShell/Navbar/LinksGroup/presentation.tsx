import {
  Group,
  Box,
  Collapse,
  ThemeIcon,
  UnstyledButton,
  Anchor,
  rem,
} from '@mantine/core';
import {IconChevronLeft, TablerIconsProps} from '@tabler/icons-react';
import Link from 'next/link';
import React, {ReactNode, useState} from 'react';

import classes from './index.module.css';

interface LinksProps {
  icon: (props: TablerIconsProps) => ReactNode;
  label: string;
  initiallyOpened?: boolean;
  onClick?: () => void;
  link: {
    label: string;
    link: string;
  }[];
}

const Links = (props: LinksProps) => {
  const {icon: Icon, label, initiallyOpened, onClick, link} = props;
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
              <Icon size="1.1rem" />
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
        {link.map(link => (
          <Anchor
            component={Link}
            unstyled
            className={classes.link}
            href={link.link}
            onClick={onClick}
            key={link.label}
          >
            {link.label}
          </Anchor>
        ))}
      </Collapse>
    </>
  );
};

interface LinkProps {
  icon: (props: TablerIconsProps) => ReactNode;
  label: string;
  onClick?: () => void;
  link: string;
}

const SingleLink = (props: LinkProps) => {
  const {icon: Icon, label, onClick, link} = props;
  return (
    <Anchor
      component={Link}
      href={link ?? '/'}
      onClick={onClick}
      className={classes.control}
    >
      <Group justify="space-between" gap={0}>
        <Box style={{display: 'flex', alignItems: 'center'}}>
          <ThemeIcon variant="light" size={30}>
            <Icon size="1.1rem" />
          </ThemeIcon>
          <Box ml="md">{label}</Box>
        </Box>
      </Group>
    </Anchor>
  );
};

type Props = LinksProps | LinkProps;

export const Presentation: React.FC<Props> = props => {
  const {link, ...other} = props;
  const isLinks = Array.isArray(link);

  if (isLinks) {
    return <Links link={link} {...other} />;
  } else {
    return <SingleLink link={link} {...other} />;
  }
};
