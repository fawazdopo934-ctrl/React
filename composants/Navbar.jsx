const Navbar = () => {
  return (
    <>
      {/* <!-- bar de nav --> */}
      <div className="bg-white shadow-lg px-4 lg:px-14 py-2">
        <nav className="flex justify-between items-center">
          <a href="">
            <img
              src="../images/logo.png"
              className="w-[200px] h-[50px] object-contain"
              alt=""
            />
          </a>
          <img
            id="menu-open"
            src="../images/menu-icon.png"
            className="size-6 block lg:hidden cursor-pointer"
            alt=""
          />
          <ul className="hidden lg:flex space-x-6 text-[16px] uppercase">
            <li>
              <a
                href=""
                className="hover:text-blue-900 hover:border-b-4 hover:border-blue-900"
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-blue-900 hover:border-b-4 hover:border-blue-900"
              >
                A Propos
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-blue-900 hover:border-b-4 hover:border-blue-900"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-blue-900 hover:border-b-4 hover:border-blue-900"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-blue-900 hover:border-b-4 hover:border-blue-900"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-blue-900 hover:border-b-4 hover:border-blue-900"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* <!-- menu mobile --> */}
      <div className="hidden bg-white justify-center" id="menu-mobile">
        {/* <!-- icon --> */}
        <img
          id="menu-close"
          src="menu-icon.png"
          className="size-6 block lg:hidden cursor-pointer"
          alt=""
        />
        <ul className="space-y-4 text-[16px] uppercase mt-5">
          <li>
            <a
              href=""
              className="hover:text-blue-900 hover:border-b-4 hover:border-blue-900"
            >
              Accueil
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:text-blue-900 hover:border-b-4 hover:border-blue-900"
            >
              A Propos
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:text-blue-900 hover:border-b-4 hover:border-blue-900"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:text-blue-900 hover:border-b-4 hover:border-blue-900"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:text-blue-900 hover:border-b-4 hover:border-blue-900"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:text-blue-900 hover:border-b-4 hover:border-blue-900"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
