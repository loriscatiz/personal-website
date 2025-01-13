import Title from './Title'

function Contact() {
    return (
        <div className="bg-sky-100 py-16 dark:bg-sky-950" id="contact">
            <Title
                tag={'h2'}
                className="text-center text-2xl text-sky-950 dark:text-sky-100 md:text-4xl"
                text="Contact me"
            ></Title>
        </div>
    )
}

export default Contact
