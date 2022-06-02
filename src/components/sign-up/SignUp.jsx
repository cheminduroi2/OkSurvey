import Navigation from '../navigation/Navigation';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const SignUp = () => {
  return (
    <div className="signup">
      <Navigation />
      <div className="form-container">{signupForm}</div>
    </div>
  );
}

const signupForm = (
  <Form className="auth-form">
    <h3>Sign Up</h3>
  <Form.Group controlId="formFirstName">
    <Form.Label>First name</Form.Label>
    <Form.Control type="text" placeholder="First name" />
  </Form.Group>
  <Form.Group controlId="formLastName">
    <Form.Label>Last name</Form.Label>
    <Form.Control type="text" placeholder="Last name" />
  </Form.Group>
  <Form.Group controlId="formEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group controlId="formPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Enter password" />
  </Form.Group>
  <Button variant="primary" type="submit" block>Submit</Button>
  <p className="registered">
      Already registered? <Link to="/signin">Sign in</Link>
  </p>
</Form>
);

export default SignUp;
