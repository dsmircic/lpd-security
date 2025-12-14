import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  Card,
  CardBody,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      subtext: "Available 24/7",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@shellysecurity.com",
      subtext: "Response within 2 hours",
    },
    {
      icon: MapPin,
      title: "Address",
      content: "123 Tech Ave, Tech City, TC 12345",
      subtext: "Visit us in person",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon-Sun: 8:00 AM - 10:00 PM",
      subtext: "Always open for you",
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
                Get in{" "}
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #2563eb, #1d4ed8)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Touch
                </span>
              </Heading>
            </MotionBox>
            <MotionBox variants={itemVariants}>
              <Text fontSize="lg" color="gray.600" maxW="600px">
                Have questions? Our team is here to help. Reach out and we'll
                respond as soon as possible.
              </Text>
            </MotionBox>
          </MotionBox>
        </Container>
      </Box>

      {/* Contact Info Cards */}
      <Container maxW="7xl" py={20}>
        <MotionBox
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <Grid
            templateColumns={{ base: "1fr 1fr", md: "4fr" }}
            gap={6}
            mb={12}
          >
            {contactInfo.map((info, idx) => {
              const IconComponent = info.icon;
              return (
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
                    <HStack spacing={4} mb={4}>
                      <Box
                        p={3}
                        bg="linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(29, 78, 216, 0.1))"
                        borderRadius="lg"
                      >
                        <IconComponent color="#2563eb" size={24} />
                      </Box>
                      <Box>
                        <Heading as="h3" size="sm">
                          {info.title}
                        </Heading>
                      </Box>
                    </HStack>
                    <Text fontWeight="600" mb={1}>
                      {info.content}
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                      {info.subtext}
                    </Text>
                  </CardBody>
                </MotionCard>
              );
            })}
          </Grid>
        </MotionBox>
      </Container>

      {/* Contact Form Section */}
      <Box
        bg="linear-gradient(135deg, rgba(240, 247, 255, 0.5) 0%, rgba(225, 239, 254, 0.5) 100%)"
        py={20}
      >
        <Container maxW="4xl">
          <MotionBox
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            <MotionBox variants={itemVariants} textAlign="center" mb={12}>
              <Heading as="h2" size="xl" mb={4}>
                Send us a{" "}
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #2563eb, #1d4ed8)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Message
                </span>
              </Heading>
              <Text color="gray.600">
                Fill out the form below and we'll get back to you within 2 hours
                during business hours.
              </Text>
            </MotionBox>

            <MotionCard
              variants={itemVariants}
              bg="white"
              border="1px solid rgba(37, 99, 235, 0.1)"
              borderRadius="xl"
            >
              <CardBody p={8}>
                <form onSubmit={handleSubmit}>
                  <VStack spacing={6}>
                    {/* Name and Email Row */}
                    <Grid
                      templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                      gap={4}
                      width="100%"
                    >
                      <FormControl isRequired>
                        <FormLabel color="gray.700" fontWeight="600">
                          Full Name
                        </FormLabel>
                        <Input
                          placeholder="Your name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          borderColor="brand.200"
                          _focus={{
                            borderColor: "brand.500",
                            boxShadow: "0 0 0 3px rgba(37, 99, 235, 0.1)",
                          }}
                        />
                      </FormControl>

                      <FormControl isRequired>
                        <FormLabel color="gray.700" fontWeight="600">
                          Email Address
                        </FormLabel>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          borderColor="brand.200"
                          _focus={{
                            borderColor: "brand.500",
                            boxShadow: "0 0 0 3px rgba(37, 99, 235, 0.1)",
                          }}
                        />
                      </FormControl>
                    </Grid>

                    {/* Phone and Subject Row */}
                    <Grid
                      templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                      gap={4}
                      width="100%"
                    >
                      <FormControl>
                        <FormLabel color="gray.700" fontWeight="600">
                          Phone Number
                        </FormLabel>
                        <Input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          borderColor="brand.200"
                          _focus={{
                            borderColor: "brand.500",
                            boxShadow: "0 0 0 3px rgba(37, 99, 235, 0.1)",
                          }}
                        />
                      </FormControl>

                      <FormControl isRequired>
                        <FormLabel color="gray.700" fontWeight="600">
                          Subject
                        </FormLabel>
                        <Input
                          placeholder="How can we help?"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          borderColor="brand.200"
                          _focus={{
                            borderColor: "brand.500",
                            boxShadow: "0 0 0 3px rgba(37, 99, 235, 0.1)",
                          }}
                        />
                      </FormControl>
                    </Grid>

                    {/* Message */}
                    <FormControl isRequired>
                      <FormLabel color="gray.700" fontWeight="600">
                        Message
                      </FormLabel>
                      <Textarea
                        placeholder="Tell us about your security needs..."
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        minH="150px"
                        borderColor="brand.200"
                        _focus={{
                          borderColor: "brand.500",
                          boxShadow: "0 0 0 3px rgba(37, 99, 235, 0.1)",
                        }}
                      />
                    </FormControl>

                    {/* Submit Button */}
                    <Button
                      width="100%"
                      type="submit"
                      bgGradient="linear(to-r, #2563eb, #1d4ed8)"
                      color="white"
                      size="lg"
                      fontWeight="600"
                      leftIcon={<Send size={20} />}
                      isLoading={submitted}
                      _hover={{
                        transform: "translateY(-2px)",
                        boxShadow: "0 10px 30px rgba(37, 99, 235, 0.3)",
                      }}
                    >
                      {submitted ? "Sending..." : "Send Message"}
                    </Button>

                    {submitted && (
                      <Box
                        bg="green.50"
                        border="1px solid"
                        borderColor="green.200"
                        color="green.800"
                        px={4}
                        py={3}
                        borderRadius="lg"
                        width="100%"
                        textAlign="center"
                      >
                        ✓ Thank you! We'll get back to you soon.
                      </Box>
                    )}
                  </VStack>
                </form>
              </CardBody>
            </MotionCard>
          </MotionBox>
        </Container>
      </Box>

      {/* Map Section */}
      <Box bg="white" py={20}>
        <Container maxW="7xl">
          <MotionBox
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            <MotionBox variants={itemVariants} textAlign="center" mb={8}>
              <Heading as="h2" size="xl" mb={2}>
                Find Us On The Map
              </Heading>
              <Text color="gray.600">
                Visit our office for a personal consultation
              </Text>
            </MotionBox>

            <MotionBox
              variants={itemVariants}
              borderRadius="xl"
              overflow="hidden"
              border="1px solid rgba(37, 99, 235, 0.1)"
              height="400px"
              bg="linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(29, 78, 216, 0.1))"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <VStack spacing={4} textAlign="center">
                <MapPin size={48} color="#2563eb" />
                <Text fontWeight="600" color="gray.700">
                  Google Maps integration coming soon
                </Text>
                <Text color="gray.600" fontSize="sm">
                  123 Tech Ave, Tech City, TC 12345
                </Text>
              </VStack>
            </MotionBox>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  );
}
