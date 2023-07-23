const Tweet = (props)=>{

    return (
        <div>
            <span>@{props.username}</span>
            <span><b> &nbsp; Name: </b> {props.name}</span>
            <span><b> &nbsp;Date: </b> {props.date}</span>
            <span><b> &nbsp;Message: </b> {props.message}</span>

        </div>
    )
}