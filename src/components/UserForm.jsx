import { Box, Button, Input, Text, VStack, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";

export default function UserForm({ user, submitHandler }) {
  const [formData, setFormData] = useState({
    name: user?.name || "",
    username: user?.username || "",
    email: user?.email || "",
    phone: user?.phone || "",
    website: user?.website || "",

    street: user?.address?.street || "",
    suite: user?.address?.suite || "",
    city: user?.address?.city || "",
    zipcode: user?.address?.zipcode || "",

    companyName: user?.company?.name || "",
    catchPhrase: user?.company?.catchPhrase || "",
    bs: user?.company?.bs || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const handleSubmit = () => {
    console.log(formData);
    const finalData = {
      name: formData.name,
      username: formData.username,
      email: formData.email,
      phone: formData.phone,
      website: formData.website,
      address: {
        street: formData.street,
        suite: formData.suite,
        city: formData.city,
        zipcode: formData.zipcode,
      },
      company: {
        name: formData.companyName,
        catchPhrase: formData.catchPhrase,
        bs: formData.bs,
      },
    };

    submitHandler(finalData);
  };

  return (
    <Box
      p={6}
      border="1px solid #ddd"
      borderRadius="10px"
      maxW="700px"
      mx="auto"
      mt={6}
    >
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        User Form
      </Text>

      <VStack spacing={4}>
        {/* Basic info section */}
        <Input
          placeholder="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <Input
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />

        <Input
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <Input
          placeholder="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <Input
          placeholder="Website"
          name="website"
          value={formData.website}
          onChange={handleChange}
        />

        {/* Address section */}
        <SimpleGrid columns={[1, 2]} gap={3} w="100%">
          <Input
            placeholder="Street"
            name="street"
            value={formData.street}
            onChange={handleChange}
          />
          <Input
            placeholder="Suite"
            name="suite"
            value={formData.suite}
            onChange={handleChange}
          />
          <Input
            placeholder="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
          <Input
            placeholder="Zipcode"
            name="zipcode"
            value={formData.zipcode}
            onChange={handleChange}
          />
        </SimpleGrid>

        {/* Company section */}
        <SimpleGrid columns={[1, 2]} gap={3} w="100%">
          <Input
            placeholder="Company Name"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />
          <Input
            placeholder="Catch Phrase"
            name="catchPhrase"
            value={formData.catchPhrase}
            onChange={handleChange}
          />
          <Input
            placeholder="Business"
            name="bs"
            value={formData.bs}
            onChange={handleChange}
          />
        </SimpleGrid>

        <Button colorScheme="blue" w="100%" mt={3} onClick={handleSubmit}>
          Submit
        </Button>
      </VStack>
    </Box>
  );
}
