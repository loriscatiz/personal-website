import Button from './Button';

function Form() {
    return (
        <form
            method="POST"
            className="form flex flex-col rounded-2xl bg-sky-200 p-8 shadow-lg dark:bg-sky-900"
        >
            <div className="flex flex-col gap-2">
                <label
                    htmlFor="name"
                    className="uppercase tracking-widest text-sky-950 dark:text-sky-100"
                >
                    Name:
                </label>
                <input
                    type="text"
                    required
                    name="name"
                    id="name"
                    className="rounded-xl bg-sky-800 px-4 py-2 text-sky-100 ring-indigo-600 focus:outline-none focus:ring dark:bg-sky-200 dark:text-sky-950"
                />
                <label
                    htmlFor="email"
                    className="uppercase tracking-widest text-sky-950 dark:text-sky-100"
                >
                    Email:
                </label>
                <input
                    type="email"
                    required
                    name="email"
                    id="email"
                    className="rounded-xl bg-sky-800 px-4 py-2 text-sky-100 ring-indigo-600 focus:outline-none focus:ring dark:bg-sky-200 dark:text-sky-950"
                />
                <label
                    htmlFor="message"
                    className="uppercase tracking-widest text-sky-950 dark:text-sky-100"
                >
                    Message:
                </label>
                <textarea
                    name="message"
                    rows={4}
                    id="message"
                    className="resize-none rounded-xl bg-sky-800 px-4 py-2 text-sky-100 ring-indigo-600 focus:outline-none focus:ring dark:bg-sky-200 dark:text-sky-950"
                />

                <Button
                    text={'Submit'}
                    variant={'primary'}
                    type={'submit'}
                    className="mt-4 cursor-pointer"
                ></Button>
            </div>
        </form>
    );
}
export default Form;
