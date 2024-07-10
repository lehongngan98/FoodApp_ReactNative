import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, isSupported } from 'firebase/analytics';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyBo_ZAfwQm9RCTAIHqu1Ot8-PqKl2PaBAU",
  authDomain: "foodapp-7c358.firebaseapp.com",
  projectId: "foodapp-7c358",
  storageBucket: "foodapp-7c358.appspot.com",
  messagingSenderId: "278654773253",
  appId: "1:278654773253:web:74b2d15904ab67037f946c",
  measurementId: "G-NV0XW6DJN6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Auth with AsyncStorage persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

// Initialize Analytics if supported
const initAnalytics = async () => {
    const supported = await isSupported();
    if (supported) {
        const analytics = getAnalytics(app);
    }
};

initAnalytics();

export { auth, db, app };
