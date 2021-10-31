import React, { Component } from 'react';
import style from '../user/style.css';

class User extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        //checked: false,
        profiles : [
          {id: 1, img:'', name:'Jhon',surname:'Fox',},
          {id: 2, img:'', name:'Shally',surname:'Red',},
          {id: 3, img:'', name:'Greg',surname:'Jhonson',},
      ]
    }
    }
    
    render() {
      const {profiles} = this.state
      const list = profiles.map((elem,index)=>{
        const del = () =>{
          const prof = [...this.state.profiles]
          prof.splice(index,1)
          this.setState({profiles: prof})
        }
        
        const  handleOnChange = () => {
          const updUsers = [...profiles];
          updUsers[index].isSelected = !updUsers[index].isSelected;
          
          this.setState({profiles: updUsers})
          console.log(elem.isSelected)
        }
        
        return  <li key={elem.id}  className={elem.isSelected ? 'Active' : 'none'}>{elem.img} {elem.name} {elem.surname} <input name={elem.id} type='checkbox' checked={elem.isSelected} onChange={handleOnChange}/><button onClick={del}>Del</button></li>
      })
      return (
        <article  >
          <div>{list}</div>
        </article>
      );
    }
  }
  
  
  export default User;
