import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app/App'
import { ThemeProvider } from './shared/lib/theme/ThemeProvider'
import './index.css';
import { Provider } from 'react-redux';
import { store } from './app/providers/store/Store';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider>
            <Provider store={store}>
                <App />
            </Provider>
        </ThemeProvider>
    </StrictMode>,
)
