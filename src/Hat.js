import './Hat.css';

const Hat = ({content}) => {
    return (
        <div>
            <span className="hat-text">Frequence analysis of text</span>
            <br/>
            <span className="hat-text"><b>{content}</b></span>
        </div>
    )
}

export default Hat;