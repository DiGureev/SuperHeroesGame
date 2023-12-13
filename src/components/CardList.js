import Card from "./Card.js"
import { useContext } from "react"
import { AppContext } from "../App.js"

const CardList = (props) => {
    const {HeroList, setList} = useContext(AppContext)

    return (
        <div className="main" style={{display: 'flex', width: '100%', maxWidth: '800px', flexWrap: 'wrap', margin:'auto', justifyContent:'space-around'}}>
        {
            HeroList.map((item, index) => {
               return <Card item={item} key={index}/>
            })
        }
        </div>
    )
        
    
}

export default CardList