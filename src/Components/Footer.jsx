import React from 'react'
import { Box, Stack, VStack, Avatar, Text } from "@chakra-ui/react"
import founder from "../founder.jpg"
const Footer = () => {
    return (

        <Box minH={"48"} px={"16"} py={["16", "8"]}>
            <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>

                <VStack w={'full'} alignItems={["center", "flex-start"]}>
                    <Text fontWeight={"bold"} ></Text>
                    <Text fontSize={'sm'} letterSpacing={"widest"} textAlign={["center", "left"]}>We are the best crypto trading app in India, weprovide our guidance at very reasonable price</Text>

                </VStack>
                <VStack>
                    <Avatar boxSize={"28"} mt={["4", "0"]} src={founder} />
                    <Text>Our Founder</Text>

                </VStack>

            </Stack>

        </Box>

    )
}

export default Footer
