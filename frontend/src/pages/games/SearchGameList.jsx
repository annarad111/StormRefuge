import Card from '../../components/Card'

export default function SearchGameList(game){
    console.log(game)
    async function post(){
        
    }
    return(

        <>
        <h1>Search List</h1>
        <div className='gamelist' id='topgames'>
        { game.game.map((r, index) => (
         <Card game={r} key={r[index]} />
        ))}

    </div>
        </>
    )
}