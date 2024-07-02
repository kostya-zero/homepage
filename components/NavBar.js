import {
  Box,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import {
  FaBars,
  FaBook,
  FaBriefcase,
  FaGithub,
  FaHome,
  FaUserFriends,
} from "react-icons/fa";

import { ColorModeSwitcher } from "../components/ColorModeSwitcher";
import Logo from "./Logo";
import { Link } from "@chakra-ui/next-js";

function NavBar() {
  return (
    <>
      <Box
        maxW="620px"
        marginLeft={["15px", "15px", "auto"]}
        marginRight={["15px", "15px", "auto"]}
      >
        <Flex h={8} margin="15px" justify="space-between">
          <Logo />
          <Flex>
            <ColorModeSwitcher />
            <Menu>
              <MenuButton as={IconButton} variant="outline" icon={<FaBars />} />
              <MenuList>
                <MenuItem
                  icon={<FaHome />}
                  as={Link}
                  href="/"
                  _hover={{ textDecoration: "none" }}
                >
                  Home
                </MenuItem>

                <MenuItem
                  icon={<FaBriefcase />}
                  as={Link}
                  href="/projects"
                  _hover={{ textDecoration: "none" }}
                >
                  Projects
                </MenuItem>

                <MenuItem
                  icon={<FaBook />}
                  as={Link}
                  href="/blog"
                  _hover={{ textDecoration: "none" }}
                >
                  Blog
                </MenuItem>

                <MenuItem
                  icon={<FaUserFriends />}
                  as={Link}
                  href="/contacts"
                  _hover={{ textDecoration: "none" }}
                >
                  Contacts
                </MenuItem>

                <MenuDivider />

                <MenuItem
                  icon={<FaGithub />}
                  as={Link}
                  href="https://github.com/kostya-zero/homepage"
                  isExternal
                  _hover={{ textDecoration: "none" }}
                >
                  View Source Code
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default NavBar;
