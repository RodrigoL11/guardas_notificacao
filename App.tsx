import React from 'react'
import { AuthProvider } from './src/hooks/auth';
import Routes from './src/routes/Router'

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};