import { createContext } from 'react';

const BackendContext = createContext({ baseUrl: 'http://localhost:3001/' });

export { BackendContext };
