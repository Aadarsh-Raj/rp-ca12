import './Style/button.css';
function Button(props){
    const buttonStyle = {
        backgroundColor: props.bgColor,
        color: props.color
    };
    return (
        <>
        <button className="btn" style={{...props.style, buttonStyle}}>
        {props.btnTitle}
        </button>
        </>
    );
}

export default Button;