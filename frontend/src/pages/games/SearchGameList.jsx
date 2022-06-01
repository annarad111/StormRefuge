import Card from '../../components/Card'
import './SearchGameList.css'

export default function SearchGameList(game){
    console.log(game)
    async function post(){
        
    }
    return(

        <>
        <div className='gamelist' id='topgames'>
        { game.game.map((r, index) => (
         <Card game={r} key={r[index]} />
        ))}

    </div>
        </>
    )
}