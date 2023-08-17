export default function List(props) {

    const dataList = props.dataList;

    const selectHandler = (userId) => {
        props.onSelectListItem(userId)
    }

    return (
        <div className="list">
            <ul>
                {dataList.map((user) => <li onClick={() => { selectHandler(user.id) }} key={user.id}>{user.name}</li>)}
            </ul>
        </div>
    )
} 