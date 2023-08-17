export default function Details(props) {
    const data = props.data;

    return (
        <div className='details'>
            <div>{data.avatar ? <img src={data.avatar} alt="ava" /> : 'select item on left if you want to get more information'}</div>
            <div>
                <h1>{data.name}</h1>
                <h3>{data.details && `City: ${data.details.city}`}</h3>
                <h3>{data.details && `Company: ${data.details.company}`}</h3>
                <h3>{data.details && `Position: ${data.details.position}`}</h3>
            </div>
        </div>
    );
}