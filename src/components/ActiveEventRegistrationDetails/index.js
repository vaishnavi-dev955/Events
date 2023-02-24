// Write your code here
import './index.css'

const registrationStatus = {
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
  yetToRegister: 'YET_TO_REGISTER',
}

const ActiveEventRegistrationDetails = props => {
  const {GettingActiveRegistrationStatus} = props

  const initialView = () => (
    <p className="no-active-event-description">
      Click on an event, to view its registration details
    </p>
  )

  const RegisteredView = () => (
    <div className="RegisteredView-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-style"
      />
      <h1 className="RegisteredView-heading">
        You have already registered for the event
      </h1>
    </div>
  )

  const yetToRegisterView = () => (
    <div className="yetToRegister-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yetToRegister-style"
      />
      <p className="paragraph">
        A live performance brings so much to your <br />
        relationship with dance. Seeing dance live <br />
        cna often make you fall totally in love with <br />
        this beautiful art form
      </p>
      <button className="Register-Here-button" type="button">
        Register Here
      </button>
    </div>
  )

  const RegistrationsClosedView = () => (
    <div className="RegistrationsClosedView-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registrationsclosed-style"
      />
      <h1 className="registrationsclosed-heading">
        Registrations Are Closed Now!
      </h1>
      <p className="registrationsclosed-paragraph">
        Stay tuned. We will reopen <br />
        the registrations soon!
      </p>
    </div>
  )

  const RenderRegistrationDetails = () => {
    switch (GettingActiveRegistrationStatus) {
      case registrationStatus.yetToRegister:
        return yetToRegisterView()
      case registrationStatus.registered:
        return RegisteredView()
      case registrationStatus.registrationsClosed:
        return RegistrationsClosedView()
      default:
        return initialView()
    }
  }

  return <div className="main-container2">{RenderRegistrationDetails()}</div>
}

export default ActiveEventRegistrationDetails
