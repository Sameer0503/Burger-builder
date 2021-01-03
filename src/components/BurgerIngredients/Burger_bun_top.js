import styles from './BurgerIngredients.module.css';
import BurgerSeeds from './Burger_seeds';
const burgerBunTop = () => {
    return (
        <div className={styles.BreadTop} >
            <BurgerSeeds/>
        </div>
    );
}
export default burgerBunTop;