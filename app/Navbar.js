import Link from 'next/link';

const NavLink = ({href, label}) => {
  return (
    <div key={label}>
      <li className="nav-item">
        <Link href={href} className="nav-link">{label}</Link>
      </li>
    </div>
  )

};

const Narbar = () => {
  const links = [];
  links[0] = ['../insert', 'Insert'];
  const titleSite = 'Shop';

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">{titleSite}</Link>
        <div className=" navbar" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((link) => (
              <NavLink href={link[0]} label={link[1]} key={link[1]} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Narbar;
