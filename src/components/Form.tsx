import Button from './Button';
import { useModal } from '../contexts/ModalContext';

function Form() {
    const { openModal } = useModal();

    return (
        <form
            name="contact"
            method="POST"
            className="form flex flex-col rounded-2xl bg-sky-200 p-8 shadow-lg dark:bg-sky-900"
        >
            <input type="hidden" name="form-name" value="contact" />
            <div className="flex flex-col gap-2">
                <label
                    htmlFor="name"
                    className="uppercase tracking-widest text-sky-950 dark:text-sky-100"
                >
                    Nome <span aria-hidden="true">*</span>
                </label>
                <input
                    type="text"
                    required
                    name="name"
                    id="name"
                    className="rounded-xl bg-sky-800 px-4 py-2 text-sky-100 ring-indigo-600 focus:outline-none focus:ring dark:bg-sky-200 dark:text-sky-950 placeholder-current"
                    placeholder='Mario Rossi'
                />
                <label
                    htmlFor="email"
                    className="uppercase tracking-widest text-sky-950 dark:text-sky-100"
                >
                    Email <span aria-hidden="true">*</span>
                </label>
                <input
                    type="email"
                    required
                    name="email"
                    id="email"
                    className="rounded-xl bg-sky-800 px-4 py-2 text-sky-100 ring-indigo-600 focus:outline-none focus:ring dark:bg-sky-200 dark:text-sky-950 placeholder-current"
                    placeholder='mario.rossi@mail.com'
                />
                <label
                    htmlFor="message"
                    className="uppercase tracking-widest text-sky-950 dark:text-sky-100"
                >
                    Messaggio
                </label>
                <textarea
                    name="message"
                    rows={4}
                    id="message"
                    className="resize-none rounded-xl bg-sky-800 px-4 py-2 text-sky-100 ring-indigo-600 focus:outline-none focus:ring dark:bg-sky-200 dark:text-sky-950 placeholder-current"
                    placeholder='Ti contatto perché...'
                />
                <div className="text-sky-950 dark:text-sky-100">
                    <input
                        type="checkbox"
                        required
                        name="privacy"
                        id="privacy"
                        className="h-4 w-4"
                    />
                    <label htmlFor="privacy">
                        &nbsp;Inviando questo modulo, dichiaro di aver letto e accettato l'
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault(); // Prevent the default anchor behavior
                                e.stopPropagation(); // Prevent the click from toggling the checkbox
                                openModal(); // Your function to open the modal
                            }}
                            className="underline hover:text-sky-400 focus:text-sky-400"
                        >
                            Informativa sulla privacy
                        </a>
                    </label>
                </div>
                <Button
                    text={'Invia'}
                    variant={'primary'}
                    type={'submit'}
                    className="mt-4 cursor-pointer"
                ></Button>
            </div>
        </form>
    );
}
export default Form;
