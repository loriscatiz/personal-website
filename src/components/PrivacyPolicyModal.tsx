import { useModal } from '../contexts/ModalContext';
import { useEffect, useRef } from 'react';
import Button from './Button';
import Title from './Title';

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
            className="modal w-[90%] max-w-3xl rounded-xl bg-sky-200 px-6 py-8 text-sky-950 dark:bg-sky-900 dark:text-sky-100"
            onClick={(e) => {
                if (e.target === dialogRef.current) {
                    closeModal(); // Close when clicking on the backdrop
                }
            }}
        >
            <div className="relative flex flex-col">
                <Title
                    tag={'h2'}
                    className="text-2xl"
                    text="Privacy Policy"
                ></Title>
                <Button
                    aria-label="close"
                    className="close absolute right-0 top-0 rounded-full"
                    onClick={(e) => {
                        e.preventDefault(); // Prevent the default anchor behavior
                        closeModal();
                    }}
                    text={'x'}
                    variant={''}
                ></Button>
                <p className="mt-2 text-lg"> Last updated: 19/01/2025</p>
                <p className="mt-2">
                    Welcome to my website! Your privacy is very important to me,
                    and I am committed to protecting your personal data. This
                    privacy policy explains what information is collected, how
                    it is used, and your rights under the General Data
                    Protection Regulation (GDPR).
                </p>
                <Title
                    tag={'h3'}
                    className="mt-4 text-lg"
                    text="Who is Responsible for Your Data?"
                ></Title>
                <p className="mt-2">
                    The owner of this website is:
                    <br /> Loris Catizzone <br /> Based in Italy
                </p>
                <p className="mt-2">
                    If you have any questions or concerns about this privacy
                    policy or how your data is handled, you can contact me via
                    email at:
                    <br />
                    <a
                        href="mailto:loriscatiz@gmail.com"
                        className='focus:text-sky-400" underline hover:text-sky-400'
                    >
                        loriscatiz@gmail.com
                    </a>
                </p>
                <Title
                    tag={'h3'}
                    className="mt-4 text-lg"
                    text="What Personal Information is Collected?"
                ></Title>
                <p className="mt-2">
                    The only personal data collected through this website is
                    submitted voluntarily by users via the contact form. This
                    includes:
                </p>
                <ul className="mt-2 list-inside list-disc">
                    <li>Name (used to address you)</li>
                    <li>Email address (used to respond to your message)</li>
                    <li>
                        Message content (used to understand and respond to your
                        inquiry)
                    </li>
                </ul>
                <p className="mt-2">
                    No additional data is collected, and this website does not
                    use cookies or other tracking technologies.
                </p>
                <Title
                    tag={'h3'}
                    className="mt-4 text-lg"
                    text="How is Your Data Used?"
                ></Title>
                <p className="mt-2">
                    Your personal data is used solely to respond to your
                    inquiries submitted through the contact form. I do not
                    share, sell, or use your data for any other purposes,
                    including marketing.
                </p>
                <p className="mt-2">
                    Form submissions are managed by Netlify Forms, a service
                    provided by Netlify. Netlify may process and store form data
                    on its servers. To learn more about Netlify's privacy
                    practices, you can visit their{' '}
                    <a
                        href="https://www.netlify.com/privacy/"
                        target="_blank"
                        className='focus:text-sky-400" underline hover:text-sky-400'
                    >
                        Privacy Policy
                    </a>
                </p>
                <Title
                    tag={'h3'}
                    className="mt-4 text-lg"
                    text="Legal Basis for Data Processing"
                ></Title>
                <p className="mt-2">
                    Under GDPR, the legal basis for processing your data is your
                    consent. By submitting the contact form, you agree to the
                    processing of your data as outlined in this privacy policy.
                </p>
                <Title
                    tag={'h3'}
                    className="mt-4 text-lg"
                    text="How Long is Your Data Retained?"
                ></Title>
                <p className="mt-2">
                    Your data will be stored for as long as necessary to address
                    your inquiry or until you request its deletion, but no
                    longer than 1 year from the date of submission. After this
                    period, all personal data will be permanently deleted.
                </p>
                <Title
                    tag={'h3'}
                    className="mt-4 text-lg"
                    text="Your Rights"
                ></Title>
                <p className="mt-2">
                    Under the GDPR, you have the following rights regarding your
                    personal data:
                </p>
                <ul className="mt-2 list-inside list-disc">
                    <li>
                        Access: Request a copy of the data I hold about you.
                    </li>
                    <li>
                        Rectification: If you have incorrect or outdated
                        information, please contact me, and I will delete the
                        incorrect data. You may then resubmit the form with the
                        correct details.
                    </li>
                    <li>
                        Deletion: Request the permanent deletion of your data.
                    </li>
                    <li>Objection: Object to the processing of your data.</li>
                    <li>
                        Withdrawal of Consent: Revoke your consent to data
                        processing at any time.
                    </li>
                </ul>
                <p className="mt-2">
                    To exercise any of these rights, contact me at my email.
                </p>
                <Title
                    tag={'h3'}
                    className="mt-4 text-lg"
                    text="Data Security"
                ></Title>
                <p className="mt-2">
                    Reasonable technical measures are in place to protect your
                    data from unauthorized access, loss, or misuse. However,
                    please note that no method of transmission over the internet
                    is 100% secure.
                </p>
                <Title
                    tag={'h3'}
                    className="mt-4 text-lg"
                    text="Changes to This Privacy Policy"
                ></Title>
                <p className="mt-2">
                    This privacy policy may be updated from time to time. Any
                    changes will be posted on this page, with the date of the
                    latest update noted at the top.
                </p>
                <p className="mt-2">Thank you for visiting my website!</p>
                <Button
                    className="mt-4 self-start"
                    onClick={(e) => {
                        e.preventDefault(); // Prevent the default anchor behavior
                        closeModal();
                    }}
                    text={'close'}
                    variant={''}
                ></Button>
            </div>
        </dialog>
    );
}

export default PrivacyPolicyModal;
