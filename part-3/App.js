const App = ()=>{

    return (
        <div>
            <Person name="SamSadrAzodi" age={17} hobbies={['basketball']}/>
            <Person name="Sam" age={18} hobbies={['programming', 'tennis', 'swimming']} />
            <Person name="StieveChicks" age={10}  />
        </div>
    )
}


ReactDOM.render(<App/>,document.getElementById('root'));