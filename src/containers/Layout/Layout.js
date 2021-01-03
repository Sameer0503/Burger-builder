import Aux from '../../hoc/Aux'
const layout = (props) => {
    return (
        <Aux>
            <div>toolbar, sidebar</div>
            <main>
                {props.children}
            </main>
        </Aux>
    );
}
export default layout;