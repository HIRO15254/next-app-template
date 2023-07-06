"use client";

import { Avatar, Button, Group, Menu, UnstyledButton, rem, Text, Anchor, Stack } from "@mantine/core";
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

export const UserButton = (props: Props) => {
  const { user: propUser } = props;
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
                <Stack spacing="xs">
                  <Text weight={500} size="md" sx={{ lineHeight: 1 }} mr={3}>
                    {user.name}
                  </Text>
                  <Text size="xs" color="gray" sx={{ lineHeight: 1 }} mr={3}>
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