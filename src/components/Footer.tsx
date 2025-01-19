import { useModal } from '../contexts/ModalContext';

function Footer() {
    const { openModal } = useModal();

    return (
        <footer className="bg-indigo-200 p-4 text-sky-950 dark:bg-indigo-950 dark:text-sky-100">
            <p className="text-center">
                <span>website made by Loris Catizzone - &nbsp;</span>
                <button
                    onClick={openModal}
                    className="underline hover:text-sky-400 focus:text-sky-400"
                >
                    Privacy Policy
                </button>
            </p>
        </footer>
    );
}

export default Footer;
