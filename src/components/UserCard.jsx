import {
  Box,
  Flex,
  Text,
  Avatar,
  IconButton,
  Button,
  VStack,
  HStack,
  Badge,
} from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  FaGlobe,
  FaBuilding,
  FaMapMarkerAlt,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function UserCard({ user, deleteHandler }) {
  const navigate = useNavigate();

  return (
    <Box
      bg="white"
      p={5}
      mb={4}
      mx={{ base: 2, md: 10, lg: 40 }}
      shadow="md"
      borderRadius="xl"
      border="1px solid #e2e8f0"
      transition="all 0.2s"
      _hover={{
        shadow: "xl",
        transform: "translateY(-4px)",
      }}
    >
      <Flex gap={4} align="center">
        <Avatar
          size="xl"
          name={user.name}
          src={`https://api.dicebear.com/8.x/initials/svg?seed=${user.name}`}
          onClick={() => navigate(`/user/${user.id}`)}
        />

        <Box flex="1">
          <Flex justify="space-between" align="center">
            <Text fontSize="xl" fontWeight="bold">
              {user.name}
            </Text>

            <Badge colorScheme="purple" p={1} borderRadius="md">
              {user.username}
            </Badge>
          </Flex>

          <VStack align="start" mt={2} spacing={1} fontSize="sm">
            <HStack>
              <EmailIcon color="teal.500" />
              <Text>{user.email}</Text>
            </HStack>

            <HStack>
              <PhoneIcon color="orange.400" />
              <Text>{user.phone}</Text>
            </HStack>

            <HStack>
              <FaGlobe color="#3182ce" />
              <Text>{user.website}</Text>
            </HStack>

            {user.company && (
              <HStack>
                <FaBuilding color="#805ad5" />
                <Text>{user.company.name}</Text>
              </HStack>
            )}

            {user.address && (
              <HStack>
                <FaMapMarkerAlt color="#e53e3e" />
                <Text>
                  {user.address.city}, {user.address.street}
                </Text>
              </HStack>
            )}
          </VStack>
        </Box>
      </Flex>

      {/* Edit button and delete button  */}
      <Flex justify="flex-end" mt={4} gap={3}>
        <Button
          leftIcon={<FaEdit />}
          colorScheme="blue"
          variant="outline"
          onClick={() => navigate(`/edit/${user.id}`)}
        >
          Edit
        </Button>

        <Button
          leftIcon={<FaTrash />}
          colorScheme="red"
          onClick={() => deleteHandler(user.id)}
        >
          Delete
        </Button>
      </Flex>
    </Box>
  );
}
