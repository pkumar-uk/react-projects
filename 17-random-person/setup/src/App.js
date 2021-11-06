import React, { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'
const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'
function App() {
  const [loading, setLoading] = useState(false);
  const [showdata,setShowdata] = useState('person')
  const [person, setPerson] = useState([]);
  const fetchData = async () => {
    try {
      
      const response = await fetch(url);
      const data = await response.json();
      setPerson(data.results);
      setShowdata('person');
       
    } catch (error) {
      
    }
  }
  const getline1 = (a) => {
    if (a === 'person') {
      return 'My name is'
    }
    if (a === 'mail') {
      return 'My email is'
    }
    if (a === 'times') {
      return 'My age is'
    }
    if (a === 'map') {
      return 'My street is'
    }
    if (a === 'phone') {
      return 'My phone is'
    }
    if (a === 'lock') {
      return 'My password is'
    }
    return 'My name is'
  }
  const getline2 = (a,b) => {
    if (a === 'person') {
      return b.name.first + ' ' + b.name.last
    }
    if (a === 'mail') {
      return b.email
    }
    if (a === 'times') {
      return b.dob.age
    }
    if (a === 'map') {
      return b.location.street.number + ' ' + b.location.street.name
    }
    if (a === 'phone') {
      return b.phone
    }
    if (a === 'lock') {
      return b.login.password
    }
    return  b.name.first + ' ' + b.name.last
  }
  useEffect(() => {
    fetchData()
  },[loading])
  return (
    <main>
      <div className='block bcg-black'>

      </div>
      <div className='block'>
        {person.map((a,index)=>
          <div key={ index } className='container'>
            <img src={a.picture.large} alt='usr-img' />
            <p className='user-title'>{ getline1(showdata) }</p>
            <p className='user-value'>{ getline2(showdata,a)}</p>
          
          <div className='values-list'>
              <button className='icon' onMouseOver={(e) =>  setShowdata('person') }><FaUser /></button>
              <button className='icon' onMouseOver={() => setShowdata('mail')}><FaEnvelopeOpen /></button>
              <button className='icon' onMouseOver={() => setShowdata('times')}><FaCalendarTimes /></button>
              <button className='icon' onMouseOver={() => setShowdata('map')}><FaMap /></button>
              <button className='icon' onMouseOver={() => setShowdata('phone')}><FaPhone /></button>
              <button className='icon' onMouseOver={() => setShowdata('lock')}><FaLock/></button>
            </div>
            <button className='btn' type='button' onClick={()=> setLoading(!loading)}>Random User</button>
          </div>)
          }
      </div>
    </main>
  )
}

export default App
