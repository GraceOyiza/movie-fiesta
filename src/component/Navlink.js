import { Link } from 'react-router-dom';

function Navlink({ link, title }) {
  return (
    <Link to={link}>
      {title}
    </Link>
  );
}

export default Navlink;
