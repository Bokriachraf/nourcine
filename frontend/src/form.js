import React, { useEffect, useState } from 'react';


export class FormC extends React.Component {
    state={
        email:'',
        password:''
           }


         componentDidMount(){
            console.log('class component did mount')
         }

         componentDidUpdate(){
            console.log('class component did update')
         }

         componentWillUnmount(){
            console.log('class component did unmount')
         }


    handleEmail=(e)=> {
            this.setState({
               email:e.target.value
            })
          }
           handlePassword=(e)=> {
            this.setState({
               password:e.target.value
            })
          }

    render(){
        return <div>
<input value={this.state.email} onChange={this.handleEmail} placeholder='email' />
<input value={this.state.password} onChange={this.handlePassword} placeholder='password'/>
        </div>
    }
}

export function FormF(){
   const [email, setEmail]= useState('')
   const [password, setPassword]= useState('')
   
   useEffect(()=>{
    console.log('class component did mount')
   },[])

   useEffect(()=>{
    if(email === '')
    return;
    console.log('class component did update')
   },[email])
  

   function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }

    return <div>
       <input value={email} onChange={handleEmail} />
       <input value={password} onChange={handlePassword} />


    </div>
}