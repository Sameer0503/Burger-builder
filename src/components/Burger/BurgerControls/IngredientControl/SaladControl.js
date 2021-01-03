const salad = (props) => {
    let val = props.count;
    const type = 'salad';
    
    return (
        <div>
            <label htmlFor="salad">Salad</label>
            <button onClick={() => props.stateChange(type, val+1)}>Add</button>
            {val}
            <button onClick={() => {
                if(val !==0){
                    return props.stateChange(type, val-1)
                }else{
                    return 0;
                }
                }}>
                Remove
            </button>
        </div>
    );
}

export default salad;