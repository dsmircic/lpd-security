import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  Card,
  CardBody,
  HStack,
  VStack,
  List,
  ListItem,
  ListIcon,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Wrench,
  Headphones,
  BookOpen,
  Shield,
  Zap,
} from "lucide-react";
import { Link as RouterLink } from "@tanstack/react-router";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

export default function Services() {
  const services = [
    {
      icon: Wrench,
      title: "Professional Installation",
      description: "Expert installation by certified technicians",
      features: [
        "Site assessment and consultation",
        "Complete device setup",
        "Network configuration",
        "Testing and verification",
      ],
    },
    {
      icon: Shield,
      title: "System Monitoring",
      description: "24/7 professional security monitoring",
      features: [
        "Real-time alerts",
        "Emergency response",
        "Mobile app notifications",
        "Detailed reporting",
      ],
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Round-the-clock customer support",
      features: [
        "Phone support",
        "Email assistance",
        "Remote troubleshooting",
        "Quick response time",
      ],
    },
    {
      icon: BookOpen,
      title: "Training & Education",
      description: "Comprehensive user training",
      features: [
        "Device operation guide",
        "App tutorials",
        "Best practices",
        "Advanced features guide",
      ],
    },
    {
      icon: Zap,
      title: "System Optimization",
      description: "Improve system performance",
      features: [
        "Device tuning",
        "Automation optimization",
        "Energy efficiency",
        "Security enhancement",
      ],
    },
    {
      icon: Box,
      title: "Maintenance Plans",
      description: "Preventive maintenance packages",
      features: [
        "Regular inspections",
        "Software updates",
        "Battery replacements",
        "Annual checkups",
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
                Our{" "}
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #2563eb, #1d4ed8)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Premium Services
                </span>
              </Heading>
            </MotionBox>
            <MotionBox variants={itemVariants}>
              <Text fontSize="lg" color="gray.600" maxW="600px">
                Complete support and professional services to ensure your
                security system runs perfectly.
              </Text>
            </MotionBox>
          </MotionBox>
        </Container>
      </Box>

      {/* Services Grid */}
      <Container maxW="7xl" py={20}>
        <MotionBox
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <Grid templateColumns={{ base: "1fr", md: "2fr 2fr" }} gap={8}>
            {services.map((service, idx) => {
              const Icon = service.icon;
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
                    boxShadow: "0 20px 40px rgba(37, 99, 235, 0.15)",
                  }}
                  whileHover={{ y: -8 }}
                >
                  <CardBody p={6}>
                    {/* Icon */}
                    <Box
                      p={4}
                      bg="linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(29, 78, 216, 0.1))"
                      borderRadius="lg"
                      w="fit-content"
                      mb={4}
                    >
                      <Icon color="#2563eb" size={32} />
                    </Box>

                    {/* Title and Description */}
                    <Heading as="h3" size="md" mb={2}>
                      {service.title}
                    </Heading>
                    <Text color="gray.600" mb={6} fontSize="sm">
                      {service.description}
                    </Text>

                    {/* Features */}
                    <List spacing={3}>
                      {service.features.map((feature, featureIdx) => (
                        <ListItem key={featureIdx} fontSize="sm">
                          <HStack spacing={3}>
                            <ListIcon as={CheckCircle} color="brand.500" />
                            <Text>{feature}</Text>
                          </HStack>
                        </ListItem>
                      ))}
                    </List>
                  </CardBody>
                </MotionCard>
              );
            })}
          </Grid>
        </MotionBox>
      </Container>

      {/* Pricing Section */}
      <Box
        bg="linear-gradient(135deg, rgba(240, 247, 255, 0.5) 0%, rgba(225, 239, 254, 0.5) 100%)"
        py={20}
      >
        <Container maxW="7xl">
          <MotionBox
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            textAlign="center"
            mb={12}
          >
            <MotionBox variants={itemVariants} mb={4}>
              <Heading as="h2" size="xl">
                Service{" "}
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #2563eb, #1d4ed8)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Packages
                </span>
              </Heading>
            </MotionBox>
            <MotionBox variants={itemVariants}>
              <Text color="gray.600" fontSize="lg">
                Choose the right service package for your needs
              </Text>
            </MotionBox>
          </MotionBox>

          <Grid templateColumns={{ base: "1fr", md: "3fr 3fr 3fr" }} gap={8}>
            {[
              {
                name: "Basic",
                price: "$199",
                period: "/month",
                features: [
                  "Installation support",
                  "Basic troubleshooting",
                  "Email support",
                  "9-5 availability",
                ],
              },
              {
                name: "Professional",
                price: "$399",
                period: "/month",
                features: [
                  "Professional installation",
                  "24/7 technical support",
                  "Priority response",
                  "System optimization",
                  "Monthly checkups",
                ],
                highlighted: true,
              },
              {
                name: "Enterprise",
                price: "$699",
                period: "/month",
                features: [
                  "Everything in Professional",
                  "Dedicated account manager",
                  "Advanced monitoring",
                  "Quarterly maintenance",
                  "Custom integrations",
                ],
              },
            ].map((plan, idx) => (
              <MotionCard
                key={idx}
                variants={itemVariants}
                bg={
                  plan.highlighted
                    ? "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)"
                    : "white"
                }
                border={
                  plan.highlighted ? "none" : "1px solid rgba(37, 99, 235, 0.1)"
                }
                borderRadius="xl"
                color={plan.highlighted ? "white" : "black"}
                transform={plan.highlighted ? "scale(1.05)" : "scale(1)"}
                _hover={{
                  boxShadow: plan.highlighted
                    ? "0 20px 40px rgba(37, 99, 235, 0.4)"
                    : "0 20px 40px rgba(37, 99, 235, 0.15)",
                }}
                whileHover={{ y: -8 }}
              >
                <CardBody p={8}>
                  <Heading as="h3" size="md" mb={2}>
                    {plan.name}
                  </Heading>
                  <HStack mb={6}>
                    <Text fontSize="3xl" fontWeight="bold">
                      {plan.price}
                    </Text>
                    <Text opacity={0.8}>{plan.period}</Text>
                  </HStack>

                  <VStack spacing={3} mb={6} align="flex-start">
                    {plan.features.map((feature, featureIdx) => (
                      <HStack key={featureIdx} spacing={3}>
                        <CheckCircle size={20} />
                        <Text fontSize="sm">{feature}</Text>
                      </HStack>
                    ))}
                  </VStack>

                  <Button
                    width="100%"
                    bg={plan.highlighted ? "white" : "brand.500"}
                    color={plan.highlighted ? "brand.500" : "white"}
                    _hover={{
                      transform: "translateY(-2px)",
                    }}
                  >
                    Get Started
                  </Button>
                </CardBody>
              </MotionCard>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        bg="linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)"
        color="white"
        py={16}
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
                Ready to Get Started?
              </Heading>
            </MotionBox>
            <MotionBox variants={itemVariants} mb={6}>
              <Text fontSize="lg" color="blue.100">
                Contact our team to discuss your home security needs and find
                the perfect service package.
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
                  Schedule Consultation
                </Button>
              </RouterLink>
            </MotionBox>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  );
}
