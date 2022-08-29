import React, { Component } from 'react'

import ToDo from './components/todo/todo';
import Navbar from './components/navbar/Navbar';
import SettingsContextProvider from './components/context/Settings';
import Login from './components/context/Login';
import LoginForm from './components/LoginForm/loginForm'
import './App.css';


export default class App extends Component {
  render() {
    return (
      <div className='todo-app'>
        <Login>
          <Navbar />
          <LoginForm />
          <SettingsContextProvider>
            <ToDo />
          </SettingsContextProvider>
        </Login>
      </div>
    )
  }
}