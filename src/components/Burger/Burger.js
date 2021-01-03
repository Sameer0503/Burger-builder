import BurgerTop from '../BurgerIngredients/Burger_bun_top';
import BurgerBottom from '../BurgerIngredients/Burger_bun_bottom';
import BurgerMeat from '../BurgerIngredients/Burger_meat';
import BurgerSalad from '../BurgerIngredients/Burger_salad';
import Aux from '../../hoc/Aux';

const burger = (props) => {
    const ingList = [];

    for(let i = props.ingredients.Salad; i>0; i--){
        ingList.push(<BurgerSalad key={"Salad_"+i} />);
    }
    for(let i = props.ingredients.Meat; i>0; i--){
        ingList.push(<BurgerMeat key={"Meat_"+i}/>);
    }
    
    return (
        <Aux>
            <BurgerTop/>
            {ingList}
            <BurgerBottom/>
        </Aux>
    );
}
export default burger;