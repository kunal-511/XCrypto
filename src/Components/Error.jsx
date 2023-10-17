import React from "react";
import { Alert, AlertIcon, HStack } from "@chakra-ui/react";
const Error = ({ message }) => {
  return (
    <div>
      
      <Alert
        status="error"
        position={"fixed"}
        bottom={"4"}
        left={"50%"}
        transform={"translateX(-50%)"}
        w={"container.lg"}
      >
        <AlertIcon>{message}</AlertIcon>
      </Alert>

    </div>
  );
};

export default Error;
