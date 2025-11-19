import { useParams } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  Card,
  CardBody,
  Avatar,
  VStack,
  HStack,
  Divider,
  Spinner,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getUser } from "../api/users";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { FaGlobe, FaBuilding, FaMapMarkerAlt } from "react-icons/fa";

export default function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser(id).then((data) => setUser(data));
  }, [id]);


  if (!user)
    return (
      <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <VStack colorPalette="teal" spacing={3}>
          <Spinner color="colorPalette.600" size="xl" thickness="4px" />
          <Text color="colorPalette.600" fontSize="lg" fontWeight="medium">
            Loading User Details...
          </Text>
        </VStack>
      </Box>
    );

  return (
    <Box p={4} display="flex" justifyContent="center">
      <Card
        width={["95%", "600px", "700px"]}
        padding={6}
        borderRadius="2xl"
        background="white"
        shadow="none"
        _hover={{ shadow: "none" }}
      >
        <CardBody>
          <VStack spacing={5} textAlign="center">
     
            <Avatar
              size="2xl"
              name={user.name}
              src={`https://ui-avatars.com/api/?name=${user.name}&background=0D8ABC&color=fff`}
            />

            <Heading size="lg">{user.name}</Heading>
            <Text fontSize="md" color="gray.500">
              @{user.username}
            </Text>

            <Divider />

         
            <HStack spacing={3} w="100%" justify="flex-start">
              <EmailIcon color="teal.500" />
              <Text fontSize="md">{user.email}</Text>
            </HStack>

         
            <HStack spacing={3} w="100%" justify="flex-start">
              <PhoneIcon color="orange.400" />
              <Text fontSize="md">{user.phone}</Text>
            </HStack>

           
            <HStack spacing={3} w="100%" justify="flex-start">
              <FaGlobe color="#3182ce" />
              <Text fontSize="md">{user.website}</Text>
            </HStack>

     
            <Divider />
            <Box w="100%" textAlign="left">
              <HStack spacing={3}>
                <FaMapMarkerAlt color="#e53e3e" />
                <Text fontSize="md" fontWeight="bold">
                  Address
                </Text>
              </HStack>

              <Text mt={2} fontSize="sm">
                <b>Street:</b> {user.address.street}
              </Text>
              <Text fontSize="sm">
                <b>Suite:</b> {user.address.suite}
              </Text>
              <Text fontSize="sm">
                <b>City:</b> {user.address.city}
              </Text>
              <Text fontSize="sm">
                <b>Zipcode:</b> {user.address.zipcode}
              </Text>

              <Text mt={2} fontSize="sm" color="gray.600">
                <b>Geo:</b> {user.address.geo.lat}, {user.address.geo.lng}
              </Text>
            </Box>

            
            <Divider />
            <Box w="100%" textAlign="left">
              <HStack spacing={3}>
                <FaBuilding color="#805ad5" />
                <Text fontSize="md" fontWeight="bold">
                  Company
                </Text>
              </HStack>

              <Text mt={2} fontSize="sm">
                <b>Name:</b> {user.company.name}
              </Text>
              <Text fontSize="sm">
                <b>Catch Phrase:</b> {user.company.catchPhrase}
              </Text>
              <Text fontSize="sm">
                <b>BS:</b> {user.company.bs}
              </Text>
            </Box>
          </VStack>
        </CardBody>
      </Card>
    </Box>
  );
}
