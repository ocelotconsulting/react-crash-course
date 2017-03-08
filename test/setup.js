import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import sinonChai from 'sinon-chai'
import sinon from 'sinon'
import 'sinon-as-promised'
import chaiEnzyme from 'chai-enzyme'

global.should = chai.should()
chai.use(chaiAsPromised)
chai.use(sinonChai)
chai.use(chaiEnzyme())

global.sinon = sinon
