import { useEffect, useState } from "react";
import { Box, Heading, Skeleton, VStack, useToast } from "@chakra-ui/react";
import { getUsers, deleteUser } from "../api/users";
import UserCard from "../components/UserCard";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  useEffect(() => {
    getUsers()
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        toast({
          title: "Failed to load users",
          status: "error",
        });
      });
  }, []);

  const handleDelete = async (id) => {
    await deleteUser(id);
    toast({ title: "User deleted (simulated)", status: "success" });
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <Box p={4}>
      <Heading mb={4} textAlign="center">All Users</Heading>

      {loading ? (
        <VStack gap={4}>
          <Skeleton height="80px" w="100%" />
          <Skeleton height="80px" w="100%" />
          <Skeleton height="80px" w="100%" />
        </VStack>
      ) : (
        users.map((user) => (
          <UserCard key={user.id} user={user} deleteHandler={handleDelete} />
        ))
      )}
    </Box>
  );
}
