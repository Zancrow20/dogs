import { Layout, Menu, theme } from 'antd';
import {Divider} from 'antd';

import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import { DogContext } from "./context"
import { DogsPage } from './pages/DogsPage/DogsPage';
import { DogInfoPage } from './pages/DogInfoPage/DogInfoPage';

const { Header, Content, Footer } = Layout;




const App = () => {

  const [collapsed, setCollapsed] = useState(false);
  const [doggy, setDoggy] = useState();
  const onDogSelected = (dog) => setDoggy(dog)

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          backgroundColor: "green"
        }}
      >
        <a href='/'
          style={{color: "black"}}>React_Doggies_App</a>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          
        />
      </Header>
      <DogContext.Provider value={{onDogSelected}}>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Divider orientation="up">React Doggies</Divider>
            <Router>
                <Routes>
                  <Route path="/" element={<DogsPage />}/>
                  <Route path="/:id" element={<DogInfoPage doggy={doggy} />} />{/* TODO Проблема с собачкой всё также осталась */}
                </Routes>
            </Router> 
          </Content>
        </DogContext.Provider>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        React_Doggies_App
      </Footer>
    </Layout>
  );
};
export default App;

//import logo from './logo.svg';
/*import { useState } from 'react';

import GroupActionButton from "./containers/GroupActionButton"

import './App.css';

const arr = [
{
  id:1,
  name:"Sasha"
},
{
  id:2,
  name:"Sasdsdssha"
},
{
  id:3,
  name:"Sassdsdha"
},
{
  id:4,
  name:"Sassdsdha"
}

]

function App() {
  const [isLike, setIsLike] = useState(true);//В скобке инициализационное состояние. Эта функция - один из хуков

/*  let balls = -3000;

  const plus = () => {
    setBalls += 1000;
    console.log("balls:", balls);
  }

  const minus = () => {
    setBalls(balls -=1000);
    console.log("balls:", balls);
  } 

  	return (
  //только один узел можно вернуть!!!  можно обернуть в пустой тег
  <>
    <h2>Hello {isLike ? "Andrey" : "Artur"}</h2>

    <button onClick={() => setIsLike(!isLike)}>button</button>

    {arr.map((item)=> <p>id: {item.id}, name: {item.name}</p>)}

    <GroupActionButton/>
  </>
  );
}

export default App;*/