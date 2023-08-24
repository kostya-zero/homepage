import {
  Box,
  Stack,
  HStack,
  Text,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import {
  FaBars,
  FaBriefcase,
  FaGithub,
  FaHome,
  FaTools,
  FaUserFriends,
} from 'react-icons/fa';
import { Navigate, useNavigate } from 'react-router-dom';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import Logo from './Logo';

function NavBar() {
  const navigate = useNavigate();

  function go_home() {
    navigate('/');
  }

  function go_projects() {
    navigate('/projects');
  }

  function go_workspace() {
    navigate('/workspace');
  }

  function go_contacts() {
    navigate('/contacts');
  }

  function go_source() {
    window.open('https://gitlab.com/kostya-zero/homepage', '_blank');
  }

  return (
    <>
      <Box>
        <Flex
          h={8}
          margin="15px"
          justify="space-between"
        >
          <Logo />
          <Flex>
            <ColorModeSwitcher />
            <Menu>
              <MenuButton as={IconButton} variant="solid" icon={<FaBars />} />
              <MenuList>
                <MenuItem icon={<FaHome />} onClick={go_home}>
                  Home
                </MenuItem>

                <MenuItem icon={<FaBriefcase />} onClick={go_projects}>
                  Projects
                </MenuItem>

                <MenuItem icon={<FaTools />} onClick={go_workspace}>
                  Workspace
                </MenuItem>

                <MenuItem icon={<FaUserFriends />} onClick={go_contacts}>
                  Contacts
                </MenuItem>

                <MenuItem icon={<FaGithub />} onClick={go_source}>
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
