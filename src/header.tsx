import React from 'react';
import { Button, Flex } from 'antd';

const Header: React.FC = () => (
  <Flex gap="small" wrap>
    <h1>Giulio's CV</h1>
    <Button>Home</Button>
    <Button>Blog</Button>
  </Flex>
);

export default Header;