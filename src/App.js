import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [
{
  'id' : 1,
  'name': '황재원',
  'birthday': '930913',
  'gender': '남자',
  'job': '대학생'
},
{
  'id' : 2,
  'name': '이지은',
  'birthday': '931011',
  'gender': '여자',
  'job': '연예인'
},
{
  'id' : 3,
  'name': '이순신',
  'birthday': '961119',
  'gender': '남자',
  'job': '영웅'
}
]

class App extends Component {
  render(){
    return (
      <div>
        {customers.map(c => {
          return <Customer key = {c.id} id = {c.id} name = {c.name} birthday = {c.birthday} gender = {c.gender} job = {c.job} />
        })}
      </div>
    );
  }
}

export default App;
