import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Tag,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
type ProfileCardProps = {
  userId?: number;
  name?: string;
  email?: string;
  number?: string;
  designation?: string;
  status?: string;
};
export const ProfileCard: React.FC<ProfileCardProps> = ({
  userId,
  name,
  email,
  number,
  designation,
}) => {
  const navigate = useNavigate();
  return (
    <Card maxW="xs" borderRadius="2xl" bg="primary.whitesmoke" onClick={()=>navigate(`${userId}`)}>
      <Flex align="center" justifyContent="center" pt={4}>
        <Avatar size="xl" />
      </Flex>
      <CardHeader my="0px">
        <Flex alignItems="center" justifyContent="center">
          <Heading size="md" color="primary.textPrimary">
            {name}
          </Heading>
        </Flex>
      </CardHeader>
      <CardBody py="0px">
        <Flex alignItems="center" justifyContent="center" mb={1}>
          <Tag fontSize="md" colorScheme="gray">
            {designation}
          </Tag>
        </Flex>
        <Flex alignItems="center" justifyContent="center" mb={1}>
          <Text fontSize="md" fontWeight="bold" color="primary.gray">
            {number}
          </Text>
        </Flex>
        <Flex alignItems="center" justifyContent="center" mb={1}>
          <Text fontSize="md" color="primary.gray">
            {email}
          </Text>
        </Flex>
      </CardBody>

      <CardFooter justify="center" flexWrap="wrap">
      </CardFooter>
    </Card>
  );
};
