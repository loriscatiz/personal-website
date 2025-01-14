import Title from './Title';

function Contact() {
    return (
        <div className="bg-sky-100 py-16 dark:bg-sky-950" id="contact">
            <div className="container grid grid-cols-2">
                <Title
                    tag={'h2'}
                    className="col-span-2 gap-x-8 text-center text-2xl text-sky-950 dark:text-sky-100 md:text-4xl"
                    text="Contact me"
                ></Title>
                <p className="mt-6 text-xl text-sky-900 dark:text-sky-200">
                    Got a question or want to collaborate? Feel free to reach
                    out!
                </p>
            </div>
        </div>
    );
}

export default Contact;
