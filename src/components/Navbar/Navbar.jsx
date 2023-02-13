import items from './items';

import { PageNav, Link, Icon, Item } from './navbar.styled';

const Navbar = () => {
  const elements = items.map(({ id, text, link }) => (
    <Item key={id}>
      <Link to={link}>{text}</Link>
    </Item>
  ));

  return (
    <PageNav>
      <Link to={'/'}>
        <Icon />
      </Link>
      <ul>{elements}</ul>
    </PageNav>
  );
};

export default Navbar;
