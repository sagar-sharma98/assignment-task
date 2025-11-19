import { Box, Heading, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { createUser } from "../api/users";
import UserForm from "../components/UserForm";
import { useNavigate } from "react-router-dom";

export default function AddUser() {
  const toast = useToast();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",

    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
    },

    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleSubmit = async (updatedData) => {
    await createUser(updatedData);
    toast({ title: "User added (simulated)", status: "success" });
    navigate("/");
  };

  return (
    <Box p={4}>
      <Heading mb={4} textAlign="center">
        Add User
      </Heading>

      <UserForm user={form} setForm={setForm} submitHandler={handleSubmit} />
    </Box>
  );
}
