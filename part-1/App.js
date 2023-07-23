const App = ()=>{
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Sam" />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root') )