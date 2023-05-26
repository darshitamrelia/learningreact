const Header = () => {
  let data = "hello world";

  let internalcssobject = {
    backgroundColor: " black",
    color: "red",
  };

  return (
    <>
      <nav className="navbar bg-body" style={internalcssobject}>
        <div className="container-fluid" style={internalcssobject}>
          <a className="navbar-brand" style={internalcssobject}>
            Navbar
          </a>
          <a className="navbar-brand" style={internalcssobject}>
            Home
          </a>
          <a className="navbar-brand" style={internalcssobject}>
            Menu
          </a>
          <a className="navbar-brand" style={internalcssobject}>
            Contact
          </a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};
export default Header;
