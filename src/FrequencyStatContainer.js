import './FrequencyStatContainer.css';

const FrequencyStatContainer = ({items}) => {

    return (
        <div className="statcontainer__root">
            {
                items?.map(it =>
                    <div className="statcontainer__item">
                        <span>
                            <b>{it.number}</b>
                            {` ${it.content}`}
                        </span>
                    </div>
                )
            }
        </div>
    )
}

export default FrequencyStatContainer;