// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// https://firebase.google.com/docs/web/setup#available-libraries

export const getFirebaseApp = () => { 
  // / TODO: Add SDKs for Firebase products that you want to use
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: 'AIzaSyBt21-z4HDOLsPKV8Vevu1JKvbVmQhZzTI',
    authDomain: 'whatsapp-5825d.firebaseapp.com',
    projectId: 'whatsapp-5825d',
    storageBucket: 'whatsapp-5825d.firebasestorage.app',
    messagingSenderId: '158392062116',
    appId: '1:158392062116:web:703d917f0b3d45464d1631',
    measurementId: 'G-V86YQBDBS4',
  };

  return initializeApp(firebaseConfig);  
};
