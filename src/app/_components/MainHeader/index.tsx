"use client";

import { Text, Header, MediaQuery, Burger, useMantineTheme } from "@mantine/core";

interface Props {
  opened: boolean;
  onBurgerClick: () => void;
  noBurger?: boolean;
}

export const MainHeader = (props: Props) => {
  const {
    opened,
    onBurgerClick,
  } = props;
  const theme = useMantineTheme();

  return (
    <Header height={{ base: 50, md: 70 }} p="md">
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        {!props.noBurger &&
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Burger
              opened={opened}
              onClick={onBurgerClick}
              size="sm"
              color={theme.colors.gray[6]}
              mr="xl"
            />
          </MediaQuery>
        }
        <Text>Application header</Text>
      </div>
    </Header>
  );
}