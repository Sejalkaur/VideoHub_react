import React from 'react'
import {Box, Button, Heading, HStack, Input, Stack, VStack, Text} from "@chakra-ui/react";
import {AiOutlineSend} from "react-icons/ai";
const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.700"} minH={"40"} p='16' color='white'>
        <Stack direction={['column', 'row']} >
            <VStack alignItems={"stretch"} w={"full"} px="full"> 
                <Heading textTransform={'uppercase'} size={'md'} textAlign={["center", "left"]}>
                    Subscribe to get updates
                </Heading>
                <HStack borderBottom={"2px solid white"} py={"2"}>
                    <Input placeholder='Enter Email Here...' border={"none"} borderRadius={"none"} outline={"none"} focusBorderColor='none'/>
                    <Button p={"0"} colorScheme='purple' variant={"ghost"} borderRadius={"0 20px 20px 0"}> 
                        <AiOutlineSend size={"20 "}/>
                    </Button>
                </HStack>
            </VStack>
            <VStack 
            w={"full"} 
            borderLeft={["none", "1px solid white"]}
            borderRight={["none", "1px solid white"]}
            ><Heading size="md" textTransform={"uppercase"} textAlign={"center"}>
                VIDEO HUB
            </Heading>
            <Text>All Rights Reserved</Text>
            </VStack>
            <VStack w="full">
            <Heading size="md" textTransform={"uppercase"}>Social Media</Heading>
            <Button colorScheme='whiteAlpha' variant={"Link"}>
                <a target={"_blank"} href="https://github.com/Sejalkaur">Github</a>
            </Button>

            <Button colorScheme='whiteAlpha' variant={"Link"}>
                <a target={"_blank"} href="https://www.linkedin.com/in/sejal-kaur-5ab5a4256/">LinkedIn</a>
            </Button>

            <Button colorScheme='whiteAlpha' variant={"Link"}>
                <a target={"_blank"} href="https://www.instagram.com/_sejal_kaur__/">Instagram</a>
            </Button>
            </VStack>
        </Stack>

    </Box>
  )
}

export default Footer