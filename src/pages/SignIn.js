import {Container , Grid, Row , Button  , Col , IconButton} from 'rsuite'
import FacebookOfficialIcon from '@rsuite/icons/legacy/FacebookOfficial';
import Google from '@rsuite/icons/legacy/Google';
import { auth } from '../misc/firebase';
import firebase from 'firebase/app';


const SignIn = () => {

     const signInWithProvider = async (provider) =>{
          
          const result = await auth.signInWithPopup(provider)
          console.log('result: ',result)
     }
     const onFacebookSignIn = () => {

          signInWithProvider(new firebase.auth.FacebookAuthProvider())
     }

     const onGoogleSignIn = () => {

          signInWithProvider(new firebase.auth.GoogleAuthProvider())
     }

  return (
    <Container>
      <Grid className='mt-page'>
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            <panel>
              <div className="text-center">
                <h2>Welcome to chat</h2>
                <p>Progressive chat platform for neophytes</p>
              </div>
              <div className="text-center">
                <div className="m-4 p-2">
                  <IconButton
                    onClick={onFacebookSignIn}
                    color="blue"
                    appearance="primary"
                    startIcon={<FacebookOfficialIcon />}
                  >
                    Continue with Facebook   
                  </IconButton>
                </div>
                <div>
                  <IconButton
                    onClick={onGoogleSignIn}
                    color="green"
                    appearance="primary"
                    startIcon={<Google />}
                  >
                    Continue with Google   
                  </IconButton>
                </div>
              </div>
            </panel>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
}

export default SignIn