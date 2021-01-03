import SaladControl from './IngredientControl/SaladControl';
import MeatControl from './IngredientControl/MeatControl';

const controller = (props) => {
    return (
        <div>
            <SaladControl count = {props.stateValue.Salad} stateChange = {props.stateChange}/>
            <MeatControl count = {props.stateValue.Meat} stateChange = {props.stateChange}/>
        </div>
    );
}

export default controller;