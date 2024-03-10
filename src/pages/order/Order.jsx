import {React, useContext} from 'react'
import Layout from '../../components/layout/Layout'
import MyContext from '../../context/data/MyContext'

function Order() {
  const context = useContext(MyContext)
  console.log(context) 
  // Destructure 

  const {name, rollno} = context;
  console.log(name) 
  return (
    <div>
        <Layout>Order</Layout>
    </div>
  )
}

export default Order