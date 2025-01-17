import { useModal } from '../contexts/ModalContext';


function PrivacyPolicyModal(){
    const { isModalOpen, closeModal } = useModal();

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${
                isModalOpen ? 'visible opacity-100' : 'invisible opacity-0'
            } transition-opacity duration-300`}
            onClick={closeModal} // Close modal when clicking the backdrop
        >
            <div
                className="bg-white dark:bg-gray-800 rounded-xl p-6"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
                <h2 className="text-xl font-bold">Privacy Policy</h2>
                <p>
                    Here goes your privacy policy content. Click outside this modal or use the
                    button below to close.
                </p>
                <button
                    onClick={closeModal}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Close
                </button>
            </div>
        </div>
    );
};
export default PrivacyPolicyModal;
