import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { 
    host: '0.0.0.0'
  },
  define: {
    'process.env': {
    'REACT_APP_API_KEY' : 'AIzaSyB_V_oCnwKaDI8Mrl2m6Po4VqGs7fqiYqE',
    'REACT_APP_AUTH_DOMAIN' :'nahid-eshomaz.firebaseapp.com',
    'REACT_APP_DATABASE_URL': "https://nahid-eshomaz-default-rtdb.asia-southeast1.firebasedatabase.app",
    'REACT_APP_PROJECT_ID' :'nahid-eshomaz',
    'REACT_APP_STORAGE_BUCKET' : 'nahid-eshomaz.appspot.com',
    'REACT_APP_MESSAGING_SENDER_ID' : '251847865195',
    'REACT_APP_APP_ID' : '1:251847865195:web:ed26c590d19b07bb8d522e',
    'REACT_APP_MEASUREMENT_ID' : 'G-2KCW1891TR'
    }
  }
})
