import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  Card,
  CardBody,
  VStack,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
// import { Users, Target, Award, TrendingUp } from "lucide-react";
import { Link as RouterLink } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

export default function About() {
  const { t } = useTranslation();
  // const stats = [
  //   { icon: Users, label: "Happy Customers", value: "5,000+" },
  //   { icon: Award, label: "Years Experience", value: "10+" },
  //   { icon: TrendingUp, label: "Projects Completed", value: "2,500+" },
  //   { icon: Target, label: "Customer Satisfaction", value: "98%" },
  // ];

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
      {/* Hero Section */}
      <Box
        bg="linear-gradient(135deg, rgba(240, 247, 255, 0.5) 0%, rgba(225, 239, 254, 0.5) 100%)"
        py={20}
      >
        <Container maxW="7xl">
          <MotionBox
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <MotionBox variants={itemVariants} mb={6}>
              <Heading as="h1" size="2xl" fontWeight="800">
                About{" "}
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #2563eb, #1d4ed8)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Shelly Security
                </span>
              </Heading>
            </MotionBox>

            <MotionBox variants={itemVariants} mb={4}>
              <Text
                fontSize="lg"
                color="gray.600"
                maxW="700px"
                lineHeight="1.8"
              >
                We are a leading provider of smart home security solutions in
                the region. With over a decade of experience, we've helped
                thousands of families and businesses protect what matters most
                using cutting-edge Shelly technology.
              </Text>
            </MotionBox>

            <MotionBox variants={itemVariants}>
              <Text
                fontSize="md"
                color="gray.700"
                maxW="700px"
                lineHeight="1.8"
              >
                Our mission is to make advanced home security accessible,
                affordable, and easy to use for everyone.
              </Text>
            </MotionBox>
          </MotionBox>
        </Container>
      </Box>

      {/* Stats Section */}
      {/* <Container maxW="7xl" py={20}>
        <MotionBox
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <Grid templateColumns={{ base: "1fr 1fr", md: "4fr" }} gap={8}>
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <MotionCard
                  key={idx}
                  variants={itemVariants}
                  bg="linear-gradient(135deg, rgba(37, 99, 235, 0.05), rgba(29, 78, 216, 0.05))"
                  border="1px solid rgba(37, 99, 235, 0.1)"
                  borderRadius="xl"
                  textAlign="center"
                  _hover={{
                    borderColor: "brand.500",
                    boxShadow: "0 10px 30px rgba(37, 99, 235, 0.1)",
                  }}
                >
                  <CardBody p={6}>
                    <Box mb={4}>
                      <Icon
                        color="#2563eb"
                        size={40}
                        style={{ margin: "0 auto" }}
                      />
                    </Box>
                    <Heading
                      as="h3"
                      size="2xl"
                      bgGradient="linear(to-r, #2563eb, #1d4ed8)"
                      bgClip="text"
                      mb={2}
                    >
                      {stat.value}
                    </Heading>
                    <Text color="gray.600" fontWeight="500">
                      {stat.label}
                    </Text>
                  </CardBody>
                </MotionCard>
              );
            })}
          </Grid>
        </MotionBox>
      </Container> */}

      {/* Story Section */}
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
          >
            <MotionBox variants={itemVariants} mb={8}>
              <Heading as="h2" size="xl">
                {t("about.story.title1")}{" "}
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #2563eb, #1d4ed8)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {t("about.story.title2")}
                </span>
              </Heading>
            </MotionBox>

            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8}>
              <MotionBox variants={itemVariants}>
                <VStack spacing={4} align="flex-start">
                  <Heading as="h3" size="md">
                    {t("about.story.founded")}
                  </Heading>
                  <Text color="gray.600" lineHeight="1.8">
                    {t("about.story.foundedText")}
                  </Text>
                  <Text color="gray.600" lineHeight="1.8">
                    {t("about.story.foundedText2")}
                  </Text>
                </VStack>
              </MotionBox>

              <MotionBox variants={itemVariants}>
                <VStack spacing={4} align="flex-start">
                  <Heading as="h3" size="md">
                    {t("about.story.commitment")}
                  </Heading>
                  <Text color="gray.600" lineHeight="1.8">
                    {t("about.story.commitmentText")}
                  </Text>
                  <Text color="gray.600" lineHeight="1.8">
                    {t("about.story.commitmentText2")}
                  </Text>
                </VStack>
              </MotionBox>
            </Grid>
          </MotionBox>
        </Container>
      </Box>

      {/* Team Section */}
      <Container maxW="7xl" py={20}>
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
              {t("about.why1")}{" "}
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #2563eb, #1d4ed8)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {t("about.why2")}
              </span>
            </Heading>
          </MotionBox>
          <MotionBox variants={itemVariants}>
            <Text color="gray.600" fontSize="lg">
              What sets us apart from other security providers
            </Text>
          </MotionBox>
        </MotionBox>

        <MotionBox
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <Grid templateColumns={{ base: "1fr", md: "2fr 2fr 2fr" }} gap={8}>
            {[
              {
                title: t("about.whyFeatures.expertTitle"),
                description: t("about.whyFeatures.expertDescription"),
              },
              {
                title: t("about.whyFeatures.supportTitle"),
                description: t("about.whyFeatures.supportDescription"),
              },
              {
                title: t("about.whyFeatures.technologyTitle"),
                description: t("about.whyFeatures.technologyDescription"),
              },
              {
                title: t("about.whyFeatures.pricingTitle"),
                description: t("about.whyFeatures.pricingDescription"),
              },
              {
                title: t("about.whyFeatures.solutionsTitle"),
                description: t("about.whyFeatures.solutionsDescription"),
              },
              {
                title: t("about.whyFeatures.partnershipTitle"),
                description: t("about.whyFeatures.partnershipDescription"),
              },
            ].map((item, idx) => (
              <MotionCard
                key={idx}
                variants={itemVariants}
                bg="white"
                border="1px solid rgba(37, 99, 235, 0.1)"
                borderRadius="xl"
                _hover={{
                  borderColor: "brand.500",
                  boxShadow: "0 10px 30px rgba(37, 99, 235, 0.1)",
                }}
              >
                <CardBody p={6}>
                  <Heading as="h3" size="md" mb={3}>
                    {item.title}
                  </Heading>
                  <Text color="gray.600" fontSize="sm">
                    {item.description}
                  </Text>
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
                Let's Secure Your Home Together
              </Heading>
            </MotionBox>
            <MotionBox variants={itemVariants} mb={6}>
              <Text fontSize="lg" color="blue.100">
                Join thousands of satisfied customers who trust us with their
                home security.
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
                  Get Started Today
                </Button>
              </RouterLink>
            </MotionBox>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  );
}
