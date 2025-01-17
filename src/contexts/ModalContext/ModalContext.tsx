import { createContext } from 'react';

export const ModalContext = createContext<{
    isModalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
} | null>(null);