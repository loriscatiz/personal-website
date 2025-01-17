import { useState, ReactNode } from 'react';
import { ModalContext } from './ModalContext';

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <ModalContext.Provider
            value={{
                isModalOpen,
                openModal: () => setIsModalOpen(true),
                closeModal: () => setIsModalOpen(false),
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};
