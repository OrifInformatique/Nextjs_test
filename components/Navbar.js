import Link from 'next/link';

function NavLink({href, label}) {
  return (
    <div key={label}>
      <li className="nav-item">
        <Link href={href} className="nav-link">{label}</Link>
      </li>
    </div>
  )

}

export default function Narbar() {
  const links = [];
  links[0] = ['../insert', 'Insert'];
  const titleSite = 'Shop';

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">{titleSite}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((link) => (
              <NavLink href={link[0]} label={link[1]} />
            ))}
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}


