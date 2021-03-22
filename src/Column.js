function Column(props) {
    return (
        <div className='task-column'>
            <h2>{props.status}</h2>
            <ul>
                {
                    props.list
                        .filter(el => el.status === props.status)
                        .map(el => <li key={el._id}>{el.name}<i>{el.status}</i>

                        <button>Left</button>
                        <button>Right</button>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default Column;