import { useModal } from '../contexts/ModalContext'

function Footer() {
    const { openModal } = useModal();

    return (
        <footer className="bg-gray-800 text-white p-4">
            <p className="text-center">
            <span className='mr-4'>website made by Loris Catizzone </span>
                <button
                    onClick={openModal}
                    className="underline hover:text-blue-400 focus:outline-none"
                >
                    Privacy Policy
                </button>
            </p>
        </footer>
    );
};

export default Footer