const Person = ({name,age,hobbies=['Undefined Hobby']})=>{
    let reply;
    if(age>=18){
        reply = "please go vote!"
    }else{
        reply = "you must be 18!"
    }

    let shortName;
    if(name.length>=7){
        shortName= name.slice(0,6)
    }else{
        shortName=name;
    }
    
    return (
        <div>
            <p>Learn some information about this person. <b>Name: </b> {shortName} &nbsp; <b>Age: </b> {age}</p>

            <h3>{reply}</h3>
            <h4>Hobbies:</h4>
            
            <ul>
                {hobbies.map(t => 
                (
                    <li>       
                         {t}
                    </li>
                )
                )}
            </ul>
        </div>
        
        
    )
}