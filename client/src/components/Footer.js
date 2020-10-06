import React from "react";

import { Box, Stack, Text } from "@chakra-ui/core";

function Footer() {
    return (
        <Box
        backgroundColor="red.900"
        color="red.400"
        gridArea="footer"
        zIndex={2}
        >
         <Stack spacing={[8, 12]} mx="auto" maxW="720px" align="center">
             <Box rounded="full" p={5} bg="white" mt={-10} textAlign="center">
                 </Box>
                 <Text fontSize="xl" fontWeight="medium">
                    {"made by Jolean Lima 😁"}
                 </Text>
             </Stack>   
        </Box>
    );
}

export default Footer;