import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyDWDYPq5al4Cb5XWGr-d44L2U__xnXMEbI',
	authDomain: 'crown-db-2e376.firebaseapp.com',
	databaseURL: 'https://crown-db-2e376.firebaseio.com',
	projectId: 'crown-db-2e376',
	storageBucket: 'crown-db-2e376.appspot.com',
	messagingSenderId: '830610573111',
	appId: '1:830610573111:web:b1d34f071bbc27154f7cb2',
	measurementId: 'G-QGE5QKTGTC'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	console.log(snapShot);
	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log('Error creating user', error.message);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
