import Aux from '../../hoc/Aux';
import React from 'react';
import Burger from '../../components/Burger/Burger';
import BurgerController from '../../components/Burger/BurgerControls/BurgerControls';

class BurgerBuilder extends React.Component {
    state =  {
        Ingredients : {
            Salad: 2,
            Meat: 0
        }
    };

    ingredientHandler = (type, val) => {
        switch (type) {
            case 'salad':
                this.setState(
                    {
                        Ingredients : {
                            Salad : val,
                            Meat : this.state.Ingredients.Meat
                        }
                    }
                );
                break;
            case 'meat':
                this.setState(
                    {
                        Ingredients : {
                            Salad : this.state.Ingredients.Salad,
                            Meat : val
                        }
                    }
                );
            break;
        
            default:
                break;
        }
        
        
    }
    render(){
        return(
            <Aux>
                <Burger ingredients={this.state.Ingredients} />
                <BurgerController stateValue = {this.state.Ingredients} stateChange = {this.ingredientHandler}/>
            </Aux>
        )
    };
}
export default BurgerBuilder;