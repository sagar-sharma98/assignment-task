import { Box, Flex, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <Box bg="blue.600" p={4} color="white">
      <Flex justify="space-between" align="center">
        <Heading size="md" onClick={() => navigate("/")} cursor="pointer">
          User Management
        </Heading>
        <Link to="/add">
          <Button colorScheme="teal">Add User</Button>
        </Link>
      </Flex>
    </Box>
  );
}
