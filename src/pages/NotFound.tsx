import { Box, Container, Heading, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Link as RouterLink, useNavigate } from "@tanstack/react-router";

const MotionBox = motion(Box);

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Box
      minHeight="80vh"
      display="flex"
      alignItems="center"
      bg="linear-gradient(135deg, rgba(240, 247, 255, 0.5) 0%, rgba(225, 239, 254, 0.5) 100%)"
    >
      <Container maxW="7xl" centerContent>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          textAlign="center"
        >
          {/* 404 Number */}
          <MotionBox
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            mb={6}
          >
            <Heading
              as="h1"
              size="4xl"
              fontWeight="800"
              bgGradient="linear(to-r, #2563eb, #1d4ed8)"
              bgClip="text"
              mb={4}
            >
              404
            </Heading>
          </MotionBox>

          {/* Title */}
          <Heading as="h2" size="xl" mb={4} color="gray.800">
            Page Not Found
          </Heading>

          {/* Description */}
          <Text
            color="gray.600"
            fontSize="lg"
            maxW="500px"
            mb={8}
            lineHeight="1.8"
          >
            Oops! The page you're looking for doesn't exist. It might have been
            moved or deleted. Don't worry, we're here to help you get back on
            track.
          </Text>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Box display="flex" gap={4} justifyContent="center" flexWrap="wrap">
              <RouterLink to="/">
                <Button
                  size="lg"
                  bgGradient="linear(to-r, #2563eb, #1d4ed8)"
                  color="white"
                  leftIcon={<Home size={20} />}
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "0 10px 30px rgba(37, 99, 235, 0.3)",
                  }}
                >
                  Go to Home
                </Button>
              </RouterLink>

              <Button
                size="lg"
                variant="outline"
                borderColor="brand.500"
                color="brand.600"
                leftIcon={<ArrowLeft size={20} />}
                onClick={() => navigate({ to: -1 } as any)}
                _hover={{
                  bg: "rgba(37, 99, 235, 0.1)",
                  transform: "translateY(-2px)",
                }}
              >
                Go Back
              </Button>
            </Box>
          </motion.div>
        </MotionBox>
      </Container>
    </Box>
  );
}
