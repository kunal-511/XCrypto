import React from 'react'
import { Container, HStack, VStack, Button, Box, Image, Heading, Text, Spinner } from "@chakra-ui/react";
const Loader = () => {
  return (
    <>

    <VStack h={'90vh'} justifyContent={'center'} >
<Box transform={'scale(3)'}>
<Spinner size={'xl'}/>
</Box>
    </VStack>
      
    </>
  )
}

export default Loader
