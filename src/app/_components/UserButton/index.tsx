"use client";

import { Avatar, Button, Group, Menu, UnstyledButton, rem, Text, Anchor, Stack, createStyles } from "@mantine/core";
import { IconChevronDown, IconLogout, IconSettings } from "@tabler/icons-react";
import { signOut, useSession } from "next-auth/react";
import React from "react";

interface Props {
  user?: {
    name?: string | null;
    image?: string | null;
    userId?: string | null;
  }
}

const useStyles = createStyles((theme) => ({
  subText: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6]
  }
}));

export const UserButton = (props: Props) => {
  const { user: propUser } = props;
  const { classes } = useStyles();
  const { data: session } = useSession();
  const user = session?.user || propUser;
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {user ? (
        <Menu
          width={260}
          position="bottom-end"
          transitionProps={{ transition: 'pop-top-right' }}
          withinPortal
        >
          <Menu.Target>
            <UnstyledButton>
              <Group spacing={7}>
                <Avatar src={user.image} alt={user.name ?? ""} radius="xl" size="md" />
                <Stack spacing={5}>
                  <Text weight={500} size="md" sx={{ lineHeight: 1 }} mr={3}>
                    {user.name}
                  </Text>
                  <Text size="xs" sx={{ lineHeight: 1 }} mr={3} className={classes.subText}>
                    {`@${user.userId}`}
                  </Text>
                </Stack>
                <IconChevronDown size={rem(20)} stroke={1.5} />
              </Group>
            </UnstyledButton>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Label>アカウント</Menu.Label>
            <Anchor unstyled href="/settings/user">
              <Menu.Item 
                icon={<IconSettings size="0.9rem" stroke={1.5} />}
              >
                  アカウント設定
              </Menu.Item>
            </Anchor>
            <Menu.Item
              color="red"
              icon={<IconLogout size="0.9rem" stroke={1.5} />}
              onClick={() => {signOut({ callbackUrl: "/" });}}
            >
              ログアウト
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      ) : (
        <Button>
          <Anchor unstyled href="/auth/login">ログイン</Anchor>
        </Button>
      )}
    </>
  );
};