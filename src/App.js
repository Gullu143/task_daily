import './App.css';
import Header from './components/Header';
import { BrowserRouter} from 'react-router-dom';
import Links from './components/Links';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';


function App() {


  const client = new ApolloClient({
    uri: 'https://flyby-gateway.herokuapp.com/',
    cache: new InMemoryCache(),
  });

  
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Header />
        <Links />
      </BrowserRouter>
    </ApolloProvider>
    
  

  );
}

export default App;
