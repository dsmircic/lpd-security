import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  Card,
  CardBody,
  Button,
  Badge,
  HStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Star, ShoppingCart } from "lucide-react";
import { Link as RouterLink } from "@tanstack/react-router";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Shelly Pro 4PM",
      price: "$49.99",
      rating: 4.8,
      reviews: 152,
      image: "🔌",
      badge: "Best Seller",
      description: "Advanced 4-channel relay switch with power metering",
      features: [
        "4 relays",
        "Power metering",
        "WiFi + Ethernet",
        "Temperature sensor",
      ],
    },
    {
      id: 2,
      name: "Shelly Motion",
      price: "$24.99",
      rating: 4.7,
      reviews: 98,
      image: "📡",
      badge: "New",
      description: "Wireless motion sensor with advanced detection",
      features: [
        "Motion detection",
        "Wireless",
        "Long battery life",
        "Compact design",
      ],
    },
    {
      id: 3,
      name: "Shelly Flood",
      price: "$34.99",
      rating: 4.9,
      reviews: 124,
      image: "💧",
      badge: null,
      description: "Water leak detection and alarm device",
      features: ["Flood detection", "Wireless", "IP68 rated", "Audio alert"],
    },
    {
      id: 4,
      name: "Shelly Plus Plug S",
      price: "$29.99",
      rating: 4.6,
      reviews: 176,
      image: "⚡",
      badge: "Popular",
      description: "Smart WiFi plug with energy monitoring",
      features: [
        "Energy monitoring",
        "Remote control",
        "Scheduling",
        "Safety features",
      ],
    },
    {
      id: 5,
      name: "Shelly Door/Window",
      price: "$19.99",
      rating: 4.8,
      reviews: 203,
      image: "🚪",
      badge: null,
      description: "Wireless door and window sensor",
      features: ["Contact detection", "Wireless", "Tamper alert", "Low power"],
    },
    {
      id: 6,
      name: "Shelly Temperature",
      price: "$22.99",
      rating: 4.7,
      reviews: 87,
      image: "🌡️",
      badge: null,
      description: "Wireless temperature and humidity sensor",
      features: [
        "Temperature sensor",
        "Humidity sensor",
        "Long range",
        "2-year battery",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Box>
      {/* Header Section */}
      <Box
        bg="linear-gradient(135deg, rgba(240, 247, 255, 0.5) 0%, rgba(225, 239, 254, 0.5) 100%)"
        py={16}
      >
        <Container maxW="7xl">
          <MotionBox
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <MotionBox variants={itemVariants} mb={4}>
              <Heading as="h1" size="2xl" fontWeight="800">
                Our Product{" "}
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #2563eb, #1d4ed8)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Catalog
                </span>
              </Heading>
            </MotionBox>
            <MotionBox variants={itemVariants}>
              <Text fontSize="lg" color="gray.600" maxW="600px">
                Explore our comprehensive range of Shelly smart home devices
                designed for security, automation, and energy efficiency.
              </Text>
            </MotionBox>
          </MotionBox>
        </Container>
      </Box>

      {/* Products Grid */}
      <Container maxW="7xl" py={20}>
        <MotionBox
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <Grid templateColumns={{ base: "1fr", md: "2fr 2fr 2fr" }} gap={8}>
            {products.map((product) => (
              <MotionCard
                key={product.id}
                variants={itemVariants}
                bg="white"
                border="1px solid rgba(37, 99, 235, 0.1)"
                borderRadius="xl"
                overflow="hidden"
                _hover={{
                  borderColor: "brand.500",
                  boxShadow: "0 20px 40px rgba(37, 99, 235, 0.15)",
                }}
                whileHover={{ y: -8 }}
              >
                <CardBody p={6}>
                  {/* Product Image */}
                  <Box
                    fontSize="64px"
                    mb={4}
                    bg="linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(29, 78, 216, 0.1))"
                    borderRadius="lg"
                    p={4}
                    textAlign="center"
                  >
                    {product.image}
                  </Box>

                  {/* Badge and Title */}
                  <HStack mb={2} justify="space-between" align="flex-start">
                    <Heading as="h3" size="md" noOfLines={2}>
                      {product.name}
                    </Heading>
                    {product.badge && (
                      <Badge
                        bg="linear-gradient(135deg, #2563eb, #1d4ed8)"
                        color="white"
                        fontSize="xs"
                        px={2}
                        py={1}
                        whiteSpace="nowrap"
                      >
                        {product.badge}
                      </Badge>
                    )}
                  </HStack>

                  {/* Rating */}
                  <HStack mb={4} fontSize="sm">
                    <HStack spacing={1}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          color={
                            i < Math.floor(product.rating)
                              ? "#2563eb"
                              : "#d1d5db"
                          }
                          fill={
                            i < Math.floor(product.rating) ? "#2563eb" : "none"
                          }
                        />
                      ))}
                    </HStack>
                    <Text color="gray.600">
                      {product.rating} ({product.reviews})
                    </Text>
                  </HStack>

                  {/* Description */}
                  <Text fontSize="sm" color="gray.600" mb={4}>
                    {product.description}
                  </Text>

                  {/* Features */}
                  <Box mb={4}>
                    {product.features.map((feature, idx) => (
                      <Text key={idx} fontSize="xs" color="gray.500" mb={1}>
                        • {feature}
                      </Text>
                    ))}
                  </Box>

                  {/* Price and Button */}
                  <HStack mb={4} justify="space-between">
                    <Text
                      fontSize="2xl"
                      fontWeight="bold"
                      bgGradient="linear(to-r, #2563eb, #1d4ed8)"
                      bgClip="text"
                    >
                      {product.price}
                    </Text>
                  </HStack>

                  <Button
                    width="100%"
                    bgGradient="linear(to-r, #2563eb, #1d4ed8)"
                    color="white"
                    leftIcon={<ShoppingCart size={18} />}
                    _hover={{
                      transform: "translateY(-2px)",
                      boxShadow: "0 10px 25px rgba(37, 99, 235, 0.3)",
                    }}
                  >
                    Add to Cart
                  </Button>
                </CardBody>
              </MotionCard>
            ))}
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
        <Container maxW="7xl" textAlign="center">
          <MotionBox
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            <MotionBox variants={itemVariants} mb={6}>
              <Heading as="h2" size="xl">
                Need Expert Advice?
              </Heading>
            </MotionBox>
            <MotionBox variants={itemVariants} mb={6}>
              <Text fontSize="lg" color="blue.100">
                Our specialists can help you choose the right devices for your
                home security needs.
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
                  }}
                >
                  Get Free Consultation
                </Button>
              </RouterLink>
            </MotionBox>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  );
}
