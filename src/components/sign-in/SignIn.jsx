import Navigation from '../navigation/Navigation';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const SignIn = () => {
  return (
    <div className="signin">
      <Navigation />
      <div className="form-container">{signinForm}</div>
    </div>
  );
}

const signinForm = (
  <Form className="auth-form af-signin">
    <h3>Sign In</h3>
  <Form.Group controlId="formEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group controlId="formPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Enter password" />
  </Form.Group>
  <Form.Group controlId="formRemember">
  <Form.Check type="checkbox" id="checkbox" label={<span style={{fontWeight: 400}}>Remember me</span>} />
  </Form.Group>
  <Button variant="primary" type="submit" block>Submit</Button>
  <p className="forgot-password tezt-right">
    <Link to="">Forgot password?</Link>
  </p>
</Form>
);

export default SignIn;
