"use client";

import { Text, Header, MediaQuery, Burger, useMantineTheme, Group } from "@mantine/core";
import type { Session } from "next-auth";
import { UserButton } from "app/_components/UserButton";

interface Props {
  opened: boolean;
  onBurgerClick: () => void;
  noBurger?: boolean;
  session?: Session;
}

export const MainHeader = (props: Props) => {
  const {
    opened,
    onBurgerClick,
    session,
  } = props;
  const theme = useMantineTheme();

  return (
    <Header height={70} p="md">
      <Group position="apart">
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
        <UserButton user={session?.user}/>
      </Group>
    </Header>
  );
}