import {useState} from 'react'

function Input() {
    const [username, setUsername] = useState('ben')
    const handleChange = (e) => {
        setUsername(e.target.value)
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`https://api.github.com/users/${username}`)
        const data = await response.json()
    }
    }
     return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChnage={handleChange} placeholder='username'/>
                <button type='submit'>Submit</button>
            </form> 
            {/* <button>Clear</button> */}
        </div>
     )
}
export default input