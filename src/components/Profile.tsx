import styler from '../styles/Components/Profile.module.css';

export function Profile (){
    return (
        <div className={styler.profileContainer}>
            <img src="https://github.com/samuelvermeuln.png" alt="Samuel Vermeuln"/>
            <div>
                <strong>Samuel vermeuln...</strong>
                    <p>
                        <img src="icons/Up.svg" alt="Level"/>
                        Level 1
                    </p>
            </div>
        </div>
    )
}