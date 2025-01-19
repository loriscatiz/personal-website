import { useModal } from '../contexts/ModalContext';
import { useEffect, useRef } from 'react';
import Button from './Button';

function PrivacyPolicyModal() {
    const { isModalOpen, closeModal } = useModal();
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;

        if (isModalOpen && dialog) {
            dialog.showModal(); // Open the dialog
        } else if (!isModalOpen && dialog) {
            dialog.close(); // Close the dialog
        }

        // Ensure the Escape key works by default with dialog element
        const handleCancel = (e: Event) => {
            e.preventDefault(); // Prevent default close behavior to control via context
            closeModal();
        };

        dialog?.addEventListener('cancel', handleCancel);
        return () => dialog?.removeEventListener('cancel', handleCancel);
    }, [isModalOpen, closeModal]);

    return (
        <dialog
            ref={dialogRef}
            className="modal bg-sky-200 py-8 px-6 dark:bg-sky-900 text-sky-950 dark:text-sky-100 rounded-xl max-w-3xl w-[90%]"
            onClick={(e) => {
                if (e.target === dialogRef.current) {
                    closeModal(); // Close when clicking on the backdrop
                }
            }}
        ><div className='flex flex-col'>
            <h2 className="text-xl font-bold">Privacy Policy</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, velit maiores, quas eum facilis eos quam tempore, non neque vel sapiente fugit dignissimos numquam laudantium esse voluptate commodi quo consequatur.
            Nesciunt sapiente omnis hic molestiae culpa vel officia quam aperiam earum esse sit tempora, nemo id dolore, aut ratione quas itaque maxime corporis possimus inventore tenetur voluptatibus. Aliquam, eaque illo!
            Eius optio at corporis ratione blanditiis, fugit consequuntur maiores possimus dicta reprehenderit neque numquam quis minus libero cum ipsam voluptate magni quaerat delectus exercitationem soluta mollitia itaque beatae dolores! Voluptates.
            Veniam modi unde quidem vero. Natus aut ipsa iste culpa corporis fugiat laborum architecto, aperiam sapiente vero totam, repudiandae unde facilis magnam, numquam est ipsam assumenda vitae incidunt non illum.
            Nobis doloribus non assumenda velit adipisci! Perferendis enim eaque maiores illum repudiandae distinctio ipsum officia voluptate magnam rerum ullam atque delectus at quo sint repellendus dolor eum corrupti, itaque possimus.
            Aliquid deserunt autem consectetur illo eum quod repellat inventore commodi explicabo rerum nam et, deleniti temporibus molestias vel, iste ex sapiente sit itaque! Ducimus, saepe vel velit molestias adipisci pariatur.
            Voluptate architecto quasi odit et blanditiis, ducimus beatae placeat, animi recusandae, reprehenderit libero repudiandae doloribus quod unde tenetur atque modi quisquam aut? Fugiat incidunt est enim, reiciendis facere ducimus qui.
            Officiis perspiciatis possimus corporis repellendus facilis necessitatibus facere aspernatur accusantium impedit labore nisi voluptate earum dignissimos laborum sunt, iure sint ipsam fuga! Labore officiis, delectus dicta vero repellat aspernatur veniam.
            Quisquam excepturi magnam unde illo consequuntur omnis iste. Reprehenderit rem voluptas sunt atque laudantium dolores, earum est at dolor laborum corrupti sed distinctio doloribus quo delectus debitis odit ratione minima!
            Dolorum eum enim alias hic eligendi qui itaque corrupti a eveniet, cumque delectus, dolore, tenetur rem! Laudantium alias sequi eligendi illum ullam quas quidem rerum, fuga soluta veniam, possimus eveniet..</p>
            <Button text={'Close'} variant={''} href='#' className='self-start mt-4 focus:scale-100 hover:scale-100 ' onClick={(e) => {
                e.preventDefault(); // Prevent the default anchor behavior
                closeModal()
            }}></Button>
            </div>
        </dialog>
    );
}

export default PrivacyPolicyModal;
