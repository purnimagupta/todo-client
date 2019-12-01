import React from 'react';
import { Provider } from 'react-redux';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { CreateTodo } from './containers/index';
import { configureStore, configureDefaultState} from './store/index';
const { Header } = Layout


const defaultState = configureDefaultState();
const store = configureStore(defaultState);

function App() {
  return (
    <Provider store={store}>
      <Layout>

        <StyledHeader>
          Purnima's TodoList
        </StyledHeader>

        <TodoContainer>
          <CreateTodo small/>
        </TodoContainer>

      </Layout>
    </Provider>
  );
}


const StyledHeader = styled(Header)`
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  margin-bottom: 50px;
`;

const TodoContainer = styled.div`
  width: 50%;
  margin: 0 auto 50px auto;
`

export default App;
