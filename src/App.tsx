import React, { FC, useEffect, useState } from "react";
import { RootStack } from "./navigation/RootStack";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { gql, useQuery } from '@apollo/client';
import { persistCache } from "apollo3-cache-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
let headers = {
   "Authorization": "apikey joaopessoa::stepzen.net+1000::3422ed6aa1fc1715d691941915360d56d7520e1648bc911273721d5d0e750f73"
}
const client = new ApolloClient({  
   uri: 'https://joaopessoa.stepzen.net/api/eerie-hog/__graphql',
   cache: new InMemoryCache(),
   headers
});

const App= () => {   
   return (
      <ApolloProvider client={client}>
         <SafeAreaProvider>
            <RootStack />
         </SafeAreaProvider>
      </ApolloProvider>
   )
}
export default App;