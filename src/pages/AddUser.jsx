import { Box, Heading, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { createUser } from "../api/users";
import UserForm from "../components/UserForm";
import { useNavigate } from "react-router-dom";

export default function AddUser() {
  const toast = useToast();
  const navigate = useNavigate();

  // Initial FULL user structure
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

  const handleSubmit = async () => {
    await createUser(form);
    toast({ title: "User added (simulated)", status: "success" });
    navigate("/");
  };

  return (
    <Box p={4}>
      <Heading mb={4} textAlign="center">Add User</Heading>

      {/* Pass user & setForm to form */}
      <UserForm user={form} setForm={setForm} submitHandler={handleSubmit} />
    </Box>
  );
}
