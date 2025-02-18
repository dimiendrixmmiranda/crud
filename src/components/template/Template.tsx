import Rodape from "./footer/Rodape";
import Main from "./main/Main";
import styles from './style.module.css'
interface TemplateProps {
    children: React.ReactElement
}

export default function Template({children}:TemplateProps){
    return (
        <div className={styles.template}>
            <Main>
                {children}
            </Main>
            <Rodape></Rodape>
        </div>
    )
}