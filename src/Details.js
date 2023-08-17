import { useState, useEffect } from "react";

export default function Details(props) {

    const [data, setData] = useState(props);
    const { info } = props;

    function fetchList(url, setState) {
        fetch(url)
            .then(response => response.json())
            .then(data => setState(data))
    }

    useEffect(() => {
        if (info.id === []) {
            return;
        } else {
            console.log(info.id);
            try {
                fetchList(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`, setData)
            } catch {
                console.log('fail');
            }
        }
    }, [info.id]);

    return (
        <div>
            <h1>{data.name}</h1>
            <div><img src={data.avatar} alt="image" /></div>
        </div>
    );
}