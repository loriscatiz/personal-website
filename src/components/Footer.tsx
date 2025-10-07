import { useModal } from '../contexts/ModalContext';

function Footer() {
    const { openModal } = useModal();

    return (
        <footer className="bg-indigo-200 p-4 text-sky-950 dark:bg-indigo-950 dark:text-sky-100">
            <p className="text-center">
                <span>Sito web realizzato da Loris Catizzone - &nbsp;</span>
                <button
                    onClick={openModal}
                    className="underline hover:text-sky-400 focus:text-sky-400"
                >
                    Informativa sulla privacy
                </button>
            </p>
        </footer>
    );
}

export default Footer;
