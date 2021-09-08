import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const tester = (Element, props = {}) => shallow(<Element {...props} />);

export default tester;
