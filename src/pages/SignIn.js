import {Container , Grid, Row , Col , IconButton,Panel} from 'rsuite'
import FacebookOfficialIcon from '@rsuite/icons/legacy/FacebookOfficial';
import Google from '@rsuite/icons/legacy/Google';
import { auth, database } from '../misc/firebase';
import firebase from 'firebase/app';


const SignIn = () => {

     const signInWithProvider = async (provider) =>{
          
      try{
          const {additionalUserInfo , user} = await auth.signInWithPopup(provider)

          if(additionalUserInfo.isNewUser){
            await database.ref(`/profiles/${user.uid}`).set({
              name : user.displayName,
              createdAt : firebase.database.ServerValue.TIMESTAMP,
            });
          }

        alert('Signed in')
      }catch(err) {
        alert(err.message)
      }
      
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
            <Panel>
              <div className="text-center">
                <h2>Welcome to chat</h2>
                <p>Progressive chat platform for neophytes</p>
              </div>
              <div className="text-center">
                <div className="m-4">
                  <IconButton
                    onClick={onFacebookSignIn}
                    color="blue"
                    appearance="primary"
                    startIcon={<FacebookOfficialIcon />}
                  >
                    Continue with Facebook   
                  </IconButton>
                </div>
                <div className="m-2">
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
            </Panel>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
}

export default SignIn