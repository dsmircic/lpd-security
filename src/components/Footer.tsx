import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Link as ChakraLink,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      bg="linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)"
      color="white"
      mt={20}
    >
      <Container maxW="7xl" py={12}>
        <Grid
          templateColumns={{ base: "1fr", md: "2fr 1fr 1fr 1fr" }}
          gap={8}
          mb={8}
        >
          {/* Company Info */}
          <GridItem>
            <Heading
              size="md"
              mb={4}
              bgGradient="linear(to-r, #60a5fa, #3b82f6)"
              bgClip="text"
            >
              Shelly Security
            </Heading>
            <Text fontSize="sm" mb={4} color="gray.300">
              Your trusted partner in home automation and security solutions
              with premium Shelly devices.
            </Text>
            <HStack spacing={4}>
              <Box
                p={2}
                bg="rgba(255, 255, 255, 0.1)"
                borderRadius="lg"
                cursor="pointer"
                _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
              >
                <Twitter size={20} />
              </Box>
              <Box
                p={2}
                bg="rgba(255, 255, 255, 0.1)"
                borderRadius="lg"
                cursor="pointer"
                _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
              >
                <Linkedin size={20} />
              </Box>
              <Box
                p={2}
                bg="rgba(255, 255, 255, 0.1)"
                borderRadius="lg"
                cursor="pointer"
                _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
              >
                <Github size={20} />
              </Box>
            </HStack>
          </GridItem>

          {/* Quick Links */}
          <GridItem>
            <Heading size="sm" mb={4}>
              Quick Links
            </Heading>
            <VStack spacing={2} align="flex-start">
              <RouterLink to="/">
                <ChakraLink fontSize="sm" _hover={{ color: "blue.300" }}>
                  Home
                </ChakraLink>
              </RouterLink>
              <RouterLink to="/services">
                <ChakraLink fontSize="sm" _hover={{ color: "blue.300" }}>
                  Services
                </ChakraLink>
              </RouterLink>
            </VStack>
          </GridItem>

          {/* Company */}
          <GridItem>
            <Heading size="sm" mb={4}>
              Company
            </Heading>
            <VStack spacing={2} align="flex-start">
              <RouterLink to="/about">
                <ChakraLink fontSize="sm" _hover={{ color: "blue.300" }}>
                  About Us
                </ChakraLink>
              </RouterLink>
              <RouterLink to="/contact">
                <ChakraLink fontSize="sm" _hover={{ color: "blue.300" }}>
                  Contact
                </ChakraLink>
              </RouterLink>
              <ChakraLink href="#" fontSize="sm" _hover={{ color: "blue.300" }}>
                Privacy Policy
              </ChakraLink>
            </VStack>
          </GridItem>

          {/* Contact Info */}
          <GridItem>
            <Heading size="sm" mb={4}>
              Contact
            </Heading>
            <VStack spacing={3} align="flex-start" fontSize="sm">
              <HStack>
                <Phone size={16} />
                <Text>+1 (555) 123-4567</Text>
              </HStack>
              <HStack>
                <Mail size={16} />
                <Text>info@shellysecurity.com</Text>
              </HStack>
              <HStack>
                <MapPin size={16} />
                <Text>123 Tech Ave, Tech City, TC 12345</Text>
              </HStack>
            </VStack>
          </GridItem>
        </Grid>

        <Box borderTop="1px solid rgba(255, 255, 255, 0.1)" pt={8}>
          <Text fontSize="sm" color="gray.400" textAlign="center">
            © {currentYear} Shelly Security. All rights reserved. | Powered by
            modern technology
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
