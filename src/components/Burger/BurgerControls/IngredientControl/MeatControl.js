const meat = (props) => {
    let val = props.count;
    const type = 'meat';

    return (
        <div>
            <label htmlFor="meat">Meat</label>
            <button onClick={() => props.stateChange(type,val+1)}>Add</button>
            {val}
            <button onClick={() => {
                if(val !==0){
                    return props.stateChange(type,val-1)
                }else{
                    return 0;
                }
                }}>
                Remove
            </button>
        </div>
    );
}

export default meat;