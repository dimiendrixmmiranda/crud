import RedesSociais from "@/components/redesSociais/RedesSociais";
import styles from './style.module.css'

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <p>
                Projeto desenvolvido por Dimi Endrix Martins Miranda como requisito para a conclusão do curso Next.js & React da Cod3r.
            </p>
            <RedesSociais></RedesSociais>
        </footer>
    )
}