import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyANi2Qxbjr-ERZ_6NFrWL15PRf6hkUmpCU",
    authDomain: "lanube360-web-b4647.firebaseapp.com",
    databaseURL: "https://lanube360-web-b4647.firebaseio.com",
    projectId: "lanube360-web",
    storageBucket: "lanube360-web.appspot.com",
    messagingSenderId: "492990951852",
    appId: "1:492990951852:web:52d13e8bed225ceb"
  };
class Firebase {
    constructor(){
        app.initializeApp(config)

        // *** Helper ***//
        this.fieldValue = app.firestore.FieldValue
        this.emailAuthProvider = app.auth.EmailAuthProvider

        // *** Firebase APIs ***//
        this.auth = app.auth()
        this.db = app.firestore()

        // *** Social Sign In Method Provider ***//
        // this.googleProvider = new app.auth.GoogleAuthProvider()
        // this.facebookProvider = new app.auth.FacebookAuthProvider()
        // this.twitterProvider = new app.auth.TwitterAuthProvider()
    }

    // *** Auth API ***
    doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email,password)
    doSignInWithEmailAndPassword = (email,password) => this.auth.signInWithEmailAndPassword(email,password)
    // doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider)
    // doSignInWithFacebook = () => this.auth.signInWithPopup(this.facebookProvider)
    // doSignInWithTwitter = () => this.auth.signInWithPopup(this.twitterProvider)

    doSignOut = () => this.auth.signOut()
    // doPasswordReset = email => this.auth.sendPasswordResetEmail(email)
    // doSendEmailVerification = () => this.auth.currentUser.sendEmailVerification({ url: 'https://www.lanube360.com/',});
    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password)


    // *** Merge Auth and DB User API *** //
    onAuthUserListener = (next, fallback) => 
        this.auth.onAuthStateChanged( authUser => {
            if(authUser){
                this.user(authUser.uid)
                    .get()
                    .then( snapshot => {   
                        const dbUser = snapshot.data()
                        // default empty roles
                        if(dbUser && !dbUser.roles){
                            dbUser.roles = {}
                        }
                        // merge auth and db user
                        authUser = {
                            uid: authUser.uid,
                            email: authUser.email,
                            emailVerified: authUser.emailVerified,
                            providerData: authUser.providerData,
                            ...dbUser,
                        }
                        next(authUser)
                    })
            } else {
                fallback()
            }
        })
    //*** User API ***/
    user = uid => this.db.doc(`users/${uid}`)
    users = () => this.db.collection('users')

    // *** Message API *** //
    message = uid => this.db.doc(`messages/${uid}`)
    messages = () => this.db.collection('messages')
    // *** Proyecto API *** //

    cotizacion = idCotizacion => this.db.doc(`formularioContacto/${idCotizacion}`)
    cotizaciones = () => this.db.collection('formularioContacto')

    proyecto = nombreProyecto => this.db.doc(`proyectos/${nombreProyecto}`)
    proyectos = () => this.db.collection('proyectos')
    
    spots = nombreProyecto=> this.db.collection(`proyectos/${nombreProyecto}/data`)
    spot = (idSpot, uid) => this.db.doc(`proyectos/${uid}/data/${idSpot}`)
    
    mensajeContacto = (nombreProyecto) => this.db.collection(`proyectos/${nombreProyecto}/contacto`)

    batch = (numeroSpots,nombreProyecto) => {
        const batch = this.db.batch()
        for(let i = 1; i<= numeroSpots; i++){
            let idSpot = `spot${i}`
            let ref = this.db.doc(`proyectos/${nombreProyecto}/data/${idSpot}`)
            batch.set(ref,{ nombre:idSpot, titulo:'',estado:'',superficie:'',valor:'',servidumbre:'',caracteristica:''})
        }
        batch
          .commit()
          .then(() => {
            console.log('Batch correcto')
          })
          .catch(error => console.error(error))
      }
}
export default Firebase