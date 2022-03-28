import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyCWQdJImUi9pEITwfYB1GqQTw6eVEA-fk0',

	authDomain: 'foodact-delivery.firebaseapp.com',

	databaseURL: 'https://foodact-delivery-default-rtdb.firebaseio.com',

	projectId: 'foodact-delivery',

	storageBucket: 'foodact-delivery.appspot.com',

	messagingSenderId: '363911372647',

	appId: '1:363911372647:web:bf46acd8b9b1258cb519c2',
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
