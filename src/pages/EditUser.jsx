import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  VStack,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getUser, updateUser } from "../api/users";
import UserForm from "../components/UserForm";

export default function EditUser() {
  const { id } = useParams();
  const toast = useToast();
  const navigate = useNavigate();

  const [form, setForm] = useState(null);

  useEffect(() => {
    getUser(id).then((data) => {
      setForm(data);
    });
  }, [id]);

  const handleUpdate = async () => {
    await updateUser(id, form);
    toast({ title: "User updated (simulated)", status: "success" });
    navigate("/");
  };

  if (!form)
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
            Loading...
          </Text>
        </VStack>
      </Box>
    );

  return (
    <Box p={4}>
      <Heading mb={4} textAlign="center">
        Edit User
      </Heading>

      <UserForm user={form} setForm={setForm} submitHandler={handleUpdate} />
    </Box>
  );
}
