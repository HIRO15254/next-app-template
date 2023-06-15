"use client"

import { Avatar, Button, Group, Menu, UnstyledButton, rem, Text, Anchor } from "@mantine/core";
import { IconChevronDown, IconLogout, IconPlayerPause, IconSettings, IconSwitchHorizontal, IconTrash } from "@tabler/icons-react";

interface Props {
  user?: {
    name?: string | null;
    image?: string | null;
  }
}

export const UserButton = (props: Props) => {
  const { user } = props;
  return (
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
                <Text weight={500} size="md" sx={{ lineHeight: 1 }} mr={3}>
                  {user.name}
                </Text>
                <IconChevronDown size={rem(20)} stroke={1.5} />
              </Group>
            </UnstyledButton>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Label>Account</Menu.Label>
            <Menu.Item icon={<IconSettings size="0.9rem" stroke={1.5} />}>
              Account settings
            </Menu.Item>
            <Menu.Item color="red" icon={<IconLogout size="0.9rem" stroke={1.5} />}>
              Logout
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
}