import React from 'react';
import { Box, Image, Text } from "@chakra-ui/react";
import btcSrc from "../btc.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box w={"full"} h={"85vh"}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          y: 20, // Use 'y' instead of 'translateY'
        }}
        transition={{
          duration: 1, // Use a number for duration
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <Image w={"full"} h={"full"} objectFit={"contain"} src={btcSrc} />
      </motion.div>
      <Text fontSize={"6xl"} textAlign={"center"} fontWeight={'thin'} color={'whiteAlpha.700'} mt={"-21"} >Xcrypto</Text>
    </Box>
  );
}

export default Home;
