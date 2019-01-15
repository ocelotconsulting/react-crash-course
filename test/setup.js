import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import sinonChai from 'sinon-chai'
import sinon from 'sinon'
import chaiEnzyme from 'chai-enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

global.should = chai.should()
global.expect = chai.expect
chai.use(chaiAsPromised)
chai.use(sinonChai)
chai.use(chaiEnzyme())

global.sinon = sinon

if (!global.enzymeConfigured) {
  Enzyme.configure({ adapter: new Adapter() })
  global.enzymeConfigured = true
}
