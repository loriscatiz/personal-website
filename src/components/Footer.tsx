import { useModal } from '../contexts/ModalContext'

function Footer() {
    const { openModal } = useModal();

    return (
        <footer className="dark:bg-indigo-950 bg-indigo-200 text-sky-950 dark:text-sky-100 p-4">
            <p className="text-center">
            <span className='mr-4'>website made by Loris Catizzone</span>
                <button
                    onClick={openModal}
                    className="underline hover:text-sky-400 focus:text-sky-400"
                >
                    Privacy Policy
                </button>
            </p>
        </footer>
    );
};

export default Footer