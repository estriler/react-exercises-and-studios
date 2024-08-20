import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor() {
    let authorLink = "https://bakerbynature.com/ultimate-chocolate-cheesecake/";
    let authorPhoto = "https://bakerbynature.com/wp-content/uploads/2021/06/ashley.jpeg";
    let authorName = "Ashley Manila";
    return(
        <div className={styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt="Ashley Manila Photo" className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Baker by Nature</a>
            </div>
        </div>
    );
}

class RecipeDescription extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <h1>Ultimate Chocolate Cheesecake</h1>
                    <p>This Ultimate Chocolate Cheesecake features a chocolate cookie crust, creamy chocolate cheesecake filling, chocolate ganache, and shaved chocolate! Made with basic ingredients you probably have in your kitchen right now. Simply put, this is the best chocolate cheesecake recipe you'll ever try!</p>
                </div>
                <RecipeAuthor />
            </div>
        )
    }
}

export default RecipeDescription;