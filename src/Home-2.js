import { useState } from "react";

const Home = () => {
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(25);

    const handleClick = () => {
        setName('lungi');
        setAge(30);
    }
    const handleClickAgain = (name) => {
        console.log('Hello' + name);
    }
    const handleClickAgainEvent = (name, e) => {
        console.log('Hello' + name , e.target);
    }
    return ( 
        <div className="home">
            <h1>Home Page</h1>
            <p>{name} is {age} years old.</p>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => {handleClickAgain('Neela')}}>Click Me Again</button>
            <button onClick={(e) => {handleClickAgainEvent('Neela', e)}}>Click Me Again For Event</button>
        </div>
     );
}
 
export default Home;
