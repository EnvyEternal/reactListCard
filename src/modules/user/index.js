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
        
        function  handleOnChange (event) {
          const {checked} = event
          this.setState({checked: !this.state.checked});
          li.className.add('Active')
          console.log(elem.name)
          //console.log(this.state.checked)
        }
        return  <li key={index}  className=''>{elem.img} {elem.name} {elem.surname} <input name={elem.name} type='checkbox' checked={elem.checked} onChange={handleOnChange.bind(this)}/><button onClick={del}>Del</button></li>
      })
      return (
        <article  >
          <div>{list}</div>
        </article>
      );
    }
  }
  
  export default User;
