import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
      userName: 'midudev',
      name: 'Miguel Ángel Durán',
      isFollowing: true
    },
    {
      userName: 'pheralb',
      name: 'Pablo H.',
      isFollowing: false
    },
    {
      userName: 'PacoHdezs',
      name: 'Paco Hdez',
      isFollowing: true
    },
    {
      userName: 'TMChein',
      name: 'Tomas',
      isFollowing: false
    }
  ]


export function App () {
    const [userName, setUserName] = useState('marianapimientah')
    const [name, setName] = useState('Mariana Pimienta')
    return (
        <section className='App'>
            <TwitterFollowCard 
            initialIsFollowing={true}
            userName={userName} 
            name={name} />
            {/* <TwitterFollowCard 
            userName="pheralb" 
            name="Pablo H" />
            <TwitterFollowCard 
            userName="elonmusk" 
            name="Elon Musk" />
            <TwitterFollowCard 
            userName="vxnder" 
            name="Vanderhart" /> */}
            {
                users.map(({ userName, name, isFollowing }) => (
                    <TwitterFollowCard
                      key={userName}
                      name={name}
                      userName={userName}
                      initialIsFollowing={isFollowing}
                    >
                      {name}
                    </TwitterFollowCard>
                  ))
            }

            <button className='tw-followCard-button-change' onClick={() => setUserName('sofiamichel') & setName ('Sofia Michel')}>
                Cambiar nombre
            </button>
        </section>
    )
}