import '../styles/global.css';
import { AuthProvider, ProtectRoute } from '../contexts/auth';

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ProtectRoute>
        <Component {...pageProps} />
      </ProtectRoute>
    </AuthProvider>
  )
}
