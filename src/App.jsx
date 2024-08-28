import { useState, useCallback, useEffect, useMemo, useRef } from "react"
import ClassCount from "./components/ClassCount"
import ClassState from "./components/ClassState"
import FunctionCount from "./components/FunctionCount"
import FunctionState from "./components/FunctionState"
import Profile from "./components/Profile"
import Todo from "./components/Todo"
import { UserContext, ColorContext } from "./components/MyContext"
import Count from "./components/Count"
import Count2 from "./components/Count2"
import Bouton from "./components/Button"
import Profile2 from "./components/Profile2"
import axios from 'axios'
import Input from "./components/Input"
import Title from "./components/Title"
import Input2 from "./components/Input2"
import FancyInput from "./components/FancyInput"
import Box from "./components/Box"
import ClickSayHello from "./components/ClickSayHello"
import MyContact from "./components/MyContact"
import MyContact2 from "./components/MyContact2"
import NewsLetter from "./components/NewsLetter"
import Article from "./components/Articles"
import NameFileds from "./components/NameFileds"
import One from "./components/One"
import Two from "./components/Two"
import Vegeta from "./components/Vegeta"
import Goku from "./components/Goku"
import App2 from "./App2"


const  App = () => {

  const [user, setUser] = useState(
   {
      name: 'Lisa',
      age: 8
    }
  )

  const [countOne, setCountOne] = useState({value: 0, btnColor: 'success', increment: 25})
  
  const [countTwo, setCountTwo] = useState({value: 0, btnColor: 'danger', increment: 20})

  const [count, setCount] = useState(1)

  const [profile, setProfile] = useState({})

  const [dark, setDark] = useState(false)

  useEffect(() =>{
    axios
    .get(`https://jsonplaceholder.typicode.com/users/${count}`)
    .then((response) => {
      setProfile(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  }, [count])

  const memoizedValue = useMemo(() =>{
    return count > 10
  }, [count])



  const goDark = () =>{
    setDark(!dark)

    if (!dark){
      document.body.classList.add('bg-secondary')
    }else{
      document.body.classList.remove('bg-secondary')
    }
  }

  const classBtnTheme = dark ? 'btn-light' : 'btn-dark'

  const textBtnTheme = dark ? 'Rendre claire' : 'Rendre sombre'
  
  const incrementCountOne = useCallback((val) =>{
    countOne.value < 100 && setCountOne({...countOne, value: countOne.value + val})
  },[countOne])
  
 

  const ingrementCoutTwo= useCallback((val) =>{
    countTwo.value < 100 && setCountTwo({...countTwo, value: countTwo.value + val})
  }, [countTwo])

  const date = new Date()

  const fancyInputRef = useRef()
  
  const focusInput = (val) =>{
    fancyInputRef.current.focus(val)
    fancyInputRef.current.countMax()
  }

 
  

  return (
    <div className="container text-center">
     <h1>Hooks</h1>
     {/* <h2>UseState</h2> */}
    {/* <ClassState />
    <hr />
    <FunctionState />
    <Todo /> */}
    {/* <h2>UseEffect, changer titre de la page</h2> */}
    {/* <ClassCount /> */}
    {/* <FunctionCount /> */}
    {/* <h2>UseContext, récupérer des props voir fichier ProfileData.jsx,  ContentData.jsx et MyContext.jsx</h2>
    <UserContext.Provider value={user}>
      <ColorContext.Provider value='red'>
          <Profile />
      </ColorContext.Provider>
    </UserContext.Provider> */}
    {/* <h2>useReducer</h2>
    <Count /> */}
    {/* <h2>useCallback</h2>
    <p>Pour éviter des rechargements inutils, renvoie une fonction de rappel mémorisée</p>
    <Count2  count={countOne.value} bgColor={countOne.btnColor}/>
    <Count2 count= {countTwo.value} bgColor={countTwo.btnColor}/>
    
    <Bouton handleClick={incrementCountOne} btnColor={countOne.btnColor} increment={countOne.increment}>Count 1</Bouton>
    <Bouton handleClick={ingrementCoutTwo}btnColor={countTwo.btnColor} increment={countTwo.increment}>Count 2</Bouton> */}

    {/* <h2>useMemo</h2>
    <p>Renvoie une valeur mémoriseé</p>

      {memoizedValue && <div className="alert alert-danger">Stop</div>}

    <button className='btn btn-info m-3' onClick={() => setCount(count +1)}>Increment {count}</button>
    <button className={`btn ${classBtnTheme} m-3 float-right`} onClick={goDark}>{textBtnTheme}</button>
      <Profile2 profile={profile} count={count}/> */}
    {/* <h2>useRef</h2>
    <Input/>

    <Input2 />
    <Title /> */}
    {/* <h2>useImperativHandle</h2>
    <FancyInput ref={fancyInputRef}/>
    <button onClick={() =>focusInput(date.getDay())}>Cliquer</button> */}
    {/* <h2>useLayoutEffect</h2>
    <p>Permet d'avoir une meilleure performance que useEffect, à utiliser si je rencontre des probèmes lors de l'affichage d'un composant avec useEffect.</p>
    <Box /> */}
    {/* <h2>Custom Hooks</h2>
    <h3>Mes contacts</h3>
    <MyContact />
    <hr />
    <ClickSayHello />
    <h2>useTransition</h2> */}
    {/* <MyContact2 /> */}
    {/* <h2>useId</h2>
    <NewsLetter />
    <form action="">
    <NameFileds/>
    </form>
    <Article />
    <Article />
    <Article />
    <NewsLetter /> */}
    {/* <h2>PropsTypes</h2>
    <One name="Eric" age={30} />
    <Two rendableElement="hello" /> */}
   <App2 />
    
    </div>
  )
}

export default App
