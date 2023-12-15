import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="aside">
      <div className="nav-toggler">
        <span />
      </div>
      <div className="aside-inner">
        <div className="logo">
          <a href="/">Al Siam</a>
        </div>
        <ul className="nav">
          <li>
            <Link href="/" className="active">
              <i className="fa fa-home" /> Home
            </Link>
          </li>
          <li>
            <Link href="/about">
              <i className="fa fa-user" /> About
            </Link>
          </li>
          <li>
            <Link href="/services">
              <i className="fa fa-list" /> Services
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <i className="fa fa-briefcase" /> Portfolio
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <i className="fa fa-envelope" /> Blog
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <i className="fa fa-comments" /> Contact
            </Link>
          </li>
        </ul>
        <div className="copyright">© 2020 All Rights Reserved By Al Siam</div>
      </div>
    </aside>
  );
};

export default Sidebar;
