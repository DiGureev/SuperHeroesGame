import {useContext} from 'react'
import { AppContext } from '../App.js'

const Card = (props) => {
    const item = props.item
    const{ score, setScore} = useContext(AppContext)
    const {HeroList, setList} = useContext(AppContext)
    const {total, settotal} = useContext(AppContext)

    const checkClick = () => {
        if (item.clicked === false){
            let newArr = [...HeroList]
            let indx = newArr.findIndex(element => element.name === item.name)
            let newObj = {...newArr[indx]}
            newObj.clicked = true
            newArr[indx] = newObj
            console.log(newArr)
            shuffle(newArr)
            console.log(newArr)
            setList(newArr)
            setScore(score+1)
        } else {
            let newArr = [...HeroList]
            newArr.map(element => element.clicked = false)
            
            if (score > total) {
                settotal(score)
            }

            setScore(0)
            setList(newArr)
        }
    }

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;

        while (currentIndex > 0) {
      
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;

          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }
      
   
    return (
        <div className='cardBox' onClick={()=> checkClick()} style={{width: '25%', margin:'10px', height:'auto', border: '1px solid grey', padding: '5px', borderRadius: '10px', boxShadow: '2px 2px 5px grey'}}>
            <div style={{width: '100%', height:'200px', overflow: 'hidden'}}>
            <img src={item.image} style={{width: '100%'}}/>
            </div>
            <p>Name: {item.name}</p>
            <p>Occupation: {item.occupation}</p>
        </div>
    )
}

export default Card