import MainNavigation from './MainNavigation';
import classes from './Layoout.module.css';

function Layout(props){
    return (
        <div>
            <MainNavigation />
            <main className={classes.main}> {props.children}</main>
        </div>
    );
}

export default Layout;