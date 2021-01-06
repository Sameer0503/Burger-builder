import Aux from '../../hoc/Aux';
import React from 'react';
import Burger from '../../components/Burger/Burger';
import BurgerController from '../../components/Burger/BurgerControls/BurgerControls';

class BurgerBuilder extends React.Component {
    state =  {
        Ingredients : {
            Salad: 2,
            Meat: 0
        },
        Price : 4
    };

    INGREDIENTS_PRICE = {
        Salad : 2,
        Meat : 5
    }
    
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
                this.burgerPriceCalculator();
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
                this.burgerPriceCalculator();
                break;
        
            default:
                break;
        }    
    }

    burgerPriceCalculator =  () =>  {
        this.setState((prevState) => {
            let salad_price = prevState.Ingredients.Salad * this.INGREDIENTS_PRICE.Salad;
            let meat_price = prevState.Ingredients.Meat * this.INGREDIENTS_PRICE.Meat;
            
            return{
                Price : salad_price + meat_price
            }
        });
    }
    render(){
        return(
            <Aux>
                <Burger ingredients={this.state.Ingredients} />
                <div style={{backgroundColor : 'lightblue'}}>
                    <div>Price: {this.state.Price}</div>
                    <BurgerController stateValue = {this.state.Ingredients} stateChange = {this.ingredientHandler}/>
                </div>
            </Aux>
        )
    };
}
export default BurgerBuilder;