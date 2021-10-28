import React, { Component } from 'react';


class User extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        //checked: false,
        profiles : [
          {img:'', name:'Jhon',surname:'Fox', checked: false},
          {img:'', name:'Shally',surname:'Red', checked: false},
          {img:'', name:'Greg',surname:'Jhonson', checked: false},
      ]
    }
    }
    
    render() {
      const {profiles} = this.state
      const list = profiles.map((elem,index,checked)=>{
        const del = () =>{
          const prof = [...this.state.profiles]
          prof.splice(index,1)
          this.setState({profiles: prof})
        }
        function ch (event) {
          const {checked} = event
          this.setState({checked: !this.state.checked});
          console.log(elem.name)
          console.log(this.state.checked)
        }
        return  <li key={index}  className='Car'>{elem.img} {elem.name} {elem.surname} <input name={elem.name} checked={this.state.profiles.checked}  type='checkbox' onChange={ch.bind(this)}/><button onClick={del}>Del</button></li>
      })
      return (
        <article  >
          <div>{list}</div>
        </article>
      );
    }
  }
  
  export default User;
