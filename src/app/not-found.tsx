"use client"

import { Anchor } from "@mantine/core";
import React from "react";

const NotFoundPage = () => {
  return (
    <div>
      <h1>404 - Page Not Found!</h1>
      <Anchor href="/">Go back home</Anchor>
    </div>
  );
}

export default NotFoundPage;