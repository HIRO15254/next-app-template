'use client';

import {
  Code, Header, Burger, useMantineTheme, Group, Title, Anchor,
} from '@mantine/core';
import React from 'react';

import { UserButton } from 'app/_components/UserButton';
import { Responsive } from 'components/layout/Responsive';
import { colors } from 'styles/colors';

import packageJson from '../../../../package.json';

interface MainHeaderProps {
  opened: boolean;
  onBurgerClick: () => void;
  noBurger?: boolean;
}

/**
 * 全てのページで表示されるヘッダー
 */
export const MainHeader: React.FC<MainHeaderProps> = (props) => {
  const {
    opened,
    onBurgerClick,
    noBurger,
  } = props;

  const theme = useMantineTheme();

  return (
    <Header height={70} p="md">
      <Group position="apart">
        <Group position="apart">
          {!noBurger && (
            <Responsive.SmartPhone>
              <Burger
                opened={opened}
                onClick={onBurgerClick}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </Responsive.SmartPhone>
          )}
          <Anchor href="/" unstyled>
            <Title order={3} color={colors.text(theme)}>{packageJson.name}</Title>
          </Anchor>
          <Code sx={{ fontWeight: 700 }}>{`v${packageJson.version}`}</Code>
        </Group>
        <UserButton />
      </Group>
    </Header>
  );
};
