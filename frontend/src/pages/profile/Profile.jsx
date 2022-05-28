export default function Profile(){
    const user = localStorage.getItem('username');


    return(
        <>
        <h1>Hello {user} !!</h1>
        </>
    )
}