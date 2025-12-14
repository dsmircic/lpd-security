import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  HStack,
  Grid,
  Card,
  CardBody,
} from "@chakra-ui/react";
import { ArrowRight, Shield, Zap, Smartphone, BarChart3 } from "lucide-react";
import { Link as RouterLink } from "@tanstack/react-router";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

export default function Home() {
  const features = [
    {
      icon: Shield,
      title: "Advanced Security",
      description: "State-of-the-art protection for your home 24/7",
    },
    {
      icon: Smartphone,
      title: "Smart Control",
      description: "Control everything from your smartphone, anywhere",
    },
    {
      icon: Zap,
      title: "Energy Efficient",
      description: "Save up to 40% on energy costs with smart automation",
    },
    {
      icon: BarChart3,
      title: "Real-time Monitoring",
      description: "Get instant alerts and detailed analytics",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        position="relative"
        overflow="hidden"
        py={{ base: 20, md: 28 }}
        bg="linear-gradient(135deg, rgba(240, 247, 255, 0.5) 0%, rgba(225, 239, 254, 0.5) 100%)"
      >
        {/* Animated gradient background */}
        <MotionBox
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.15), transparent 50%)"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />

        <MotionBox
          position="absolute"
          bottom={0}
          right={0}
          w="500px"
          h="500px"
          bg="radial-gradient(circle at 80% 80%, rgba(29, 78, 216, 0.15), transparent 50%)"
          borderRadius="full"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />

        <Container maxW="7xl" position="relative" zIndex={2}>
          <MotionBox
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <MotionBox variants={itemVariants} mb={6}>
              <Button
                size="sm"
                variant="outline"
                borderColor="brand.500"
                color="brand.600"
                _hover={{ bg: "rgba(37, 99, 235, 0.1)" }}
              >
                ✨ Introducing Shelly Home Security Suite
              </Button>
            </MotionBox>

            <MotionBox variants={itemVariants} mb={6}>
              <Heading
                as="h1"
                size="2xl"
                fontWeight="800"
                lineHeight="1.2"
                bgGradient="linear(to-r, #1e3a8a, #2563eb)"
                bgClip="text"
              >
                Protect Your Home
                <br />
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #2563eb, #1d4ed8, #3b82f6)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  with Smart Security
                </span>
              </Heading>
            </MotionBox>

            <MotionBox variants={itemVariants} mb={8}>
              <Text
                fontSize="lg"
                color="gray.600"
                maxW="600px"
                lineHeight="1.8"
              >
                Discover the future of home security. Our advanced Shelly
                devices combined with professional installation ensure your home
                is protected 24/7 with smart automation.
              </Text>
            </MotionBox>

            <MotionBox variants={itemVariants}>
              <HStack spacing={4} flexWrap={{ base: "wrap", md: "nowrap" }}>
                <RouterLink to="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    borderColor="brand.500"
                    color="brand.600"
                    _hover={{
                      bg: "rgba(37, 99, 235, 0.1)",
                      transform: "translateY(-2px)",
                    }}
                  >
                    View Services
                  </Button>
                </RouterLink>
              </HStack>
            </MotionBox>
          </MotionBox>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxW="7xl" py={20}>
        <MotionBox
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <MotionBox variants={itemVariants} textAlign="center" mb={12}>
            <Heading as="h2" size="xl" mb={4}>
              Why Choose Shelly Security?
            </Heading>
            <Text color="gray.600" fontSize="lg" maxW="600px" mx="auto">
              Industry-leading features designed for modern homes
            </Text>
          </MotionBox>

          <Grid templateColumns={{ base: "1fr", md: "2fr 2fr" }} gap={8}>
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <MotionCard
                  key={idx}
                  variants={itemVariants}
                  bg="white"
                  border="1px solid rgba(37, 99, 235, 0.1)"
                  borderRadius="xl"
                  overflow="hidden"
                  _hover={{
                    borderColor: "brand.500",
                    boxShadow: "0 10px 30px rgba(37, 99, 235, 0.1)",
                    transform: "translateY(-4px)",
                  }}
                  whileHover={{ y: -4 }}
                >
                  <CardBody p={6}>
                    <Box
                      p={3}
                      bg="linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(29, 78, 216, 0.1))"
                      borderRadius="lg"
                      w="fit-content"
                      mb={4}
                    >
                      <Icon color="#2563eb" size={28} />
                    </Box>
                    <Heading as="h3" size="md" mb={2}>
                      {feature.title}
                    </Heading>
                    <Text color="gray.600">{feature.description}</Text>
                  </CardBody>
                </MotionCard>
              );
            })}
          </Grid>
        </MotionBox>
      </Container>

      {/* CTA Section */}
      <Box
        bg="linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)"
        color="white"
        py={16}
        mt={10}
      >
        <Container maxW="7xl">
          <MotionBox
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            textAlign="center"
          >
            <MotionBox variants={itemVariants} mb={6}>
              <Heading as="h2" size="xl">
                Ready to Secure Your Home?
              </Heading>
            </MotionBox>

            <MotionBox variants={itemVariants} mb={8}>
              <Text fontSize="lg" color="blue.100">
                Get started today and enjoy professional installation and 24/7
                support
              </Text>
            </MotionBox>

            <MotionBox variants={itemVariants}>
              <RouterLink to="/contact">
                <Button
                  size="lg"
                  bg="white"
                  color="blue.600"
                  fontWeight="bold"
                  _hover={{
                    bg: "blue.50",
                    transform: "translateY(-2px)",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                  }}
                  rightIcon={<ArrowRight size={20} />}
                >
                  Get Your Free Consultation
                </Button>
              </RouterLink>
            </MotionBox>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  );
}
