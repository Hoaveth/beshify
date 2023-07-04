import { useState } from "react";
import "./App.css";
import ColorModeComponent from "./components/ColorModeComponent";
import { Flex, HStack, Input, Stack, Text, useToast } from "@chakra-ui/react";
import CardComponent from "./components/CardComponent";

function App() {
  const [text, setText] = useState("");
  const [generatedText, setGeneratedText] = useState("");
  const toast = useToast();

  const generateText = () => {
    setText(text.replace(/ /g, "🤸"));
    return text.replace(/ /g, "🤸");
  };

  const copyText = () => {
    // Copy the text inside the text field
    navigator.clipboard.write([
      new ClipboardItem({ "text/plain": new Blob([text]) }),
    ]);

    const blobText = new Blob([text], { type: "text/plain" });
    const data = [
      new ClipboardItem({
        ["text/plain"]: blobText,
      }),
    ];

    navigator.clipboard.write(data);

    toast({
      title: "🤸 Beshify 🤸",
      description: "Text Copied Successfully.",
      status: "success",
      duration: 3000,
      isClosable: false,
    });
  };

  return (
    <>
      <Flex
        height="100vh"
        width="100%"
        alignItems="center"
        justifyContent="center"
      >
        <Stack>
          <Text
            fontSize={{ base: "4xl", md: "4xl", lg: "6xl" }}
            fontFamily={"Shrikhand, cursive"}
          >
            🤸 Beshify 🤸
          </Text>
          <Stack>
            <HStack>
              <Input
                placeholder="Enter text..."
                onChange={(e) => setText(e.target.value)}
              />
              <ColorModeComponent />
            </HStack>

            {text.length > 0 && (
              <CardComponent
                text={text}
                generateText={generateText}
                copyText={copyText}
              />
            )}
          </Stack>
        </Stack>
      </Flex>
    </>
  );
}

export default App;
