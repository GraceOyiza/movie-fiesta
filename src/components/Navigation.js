import Navlink from './Navlink';

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Navlink title="logo" link="/" />
      </div>
      {/* <div>
           <Navlink title="Movies" link="/" />
           <Navlink title="Mo" link="/" />
       </div> */}
    </nav>
  );
}

export default Navbar;
