const App = ()=>{
    return (
        <div>
            <Tweet username="TestUser1" name="Bob" date="07-20-2023" message="I am Bob and this is my message" />
            <Tweet username="TestUser2" name="Sam" date="07-19-2023" message="I am Sam and this is my message" />
            <Tweet username="TestUser3" name="Ricky" date="07-18-2023" message="I am Ricky and this is my message" />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));