import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { RelayEnvironmentProvider } from 'react-relay/hooks';
import * as serviceWorker from 'app/serviceWorker';
import environment from 'app/relayEnvironment';
import { App } from 'experiences/App';

import './index.css';

const root = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(root).render(
    <RelayEnvironmentProvider environment={environment}>
        <React.Suspense fallback={'loading...'}>
            <App />
        </React.Suspense>
    </RelayEnvironmentProvider>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();