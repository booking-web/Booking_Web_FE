import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import i18n from './i18n/index.ts';
import { I18nextProvider } from 'react-i18next';
import { LanguageProvider } from './contexts/LanguagesContext.tsx';
import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from "./contexts/ModalContext";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <LanguageProvider>
          <ModalProvider>
            <Toaster
              position="top-center"
              reverseOrder={false}
              gutter={8}
              toastOptions={{
                duration: 5000,
                style: {
                  background: "#363636",
                  color: "#fff",
                  fontFamily: "Inter",
                },
                success: {
                  duration: 3000,
                },
              }}
            />
            <App />
          </ModalProvider>
        </LanguageProvider>
      </I18nextProvider>
    </QueryClientProvider>
  </BrowserRouter>
)
