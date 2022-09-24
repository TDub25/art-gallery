function Display({user}) {
    return (
        <div> 
            <h1>{user.login}</h1>
            <img src={user.avatar_url} alt='profile'/>
            <a href={user.html_url} target='blank'/>
        </div>
    )
}
export default Display