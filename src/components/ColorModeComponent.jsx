import { Flex, Icon, Switch, useColorMode } from "@chakra-ui/react";
import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const ColorModeComponent = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex alignItems={"center"}>
      <Icon
        as={colorMode === "light" ? FiMoon : FiSun}
        color="yellow.500"
        boxSize={6}
        mr={2}
      />
      <Switch
        id="color-mode"
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
    </Flex>
  );
};

export default ColorModeComponent;
