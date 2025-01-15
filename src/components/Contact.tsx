import Form from './Form';
import Title from './Title';
import SocialIcon from './SocialIcon';

function Contact() {
    const SocialIcons = [
        {
            social: 'linkedin',
            href: 'https://www.linkedin.com/in/loris-catizzone/',
            icon: '/linkedin.svg',
        },
        {
            social: 'github',
            href: 'https://github.com/loriscatiz/',
            icon: '/github.svg',
            darkIcon: '/github-dark.svg',
        },
        {
            social: 'email',
            href: 'mailto:loriscatiz@gmail.com',
            icon: '/email.svg',
            className: 'bg-indigo-700 p-1',
        },
    ];

    return (
        <div className="bg-sky-100 py-16 dark:bg-sky-950" id="contact">
            <div className="container grid grid-cols-2">
                <Title
                    tag={'h2'}
                    className="col-span-2 gap-x-8 text-center text-2xl text-sky-950 dark:text-sky-100 md:text-4xl"
                    text="Contact me"
                ></Title>
                <div>
                    <p className="mt-6 text-xl text-sky-900 dark:text-sky-200">
                        Got a question or want to collaborate? Feel free to
                        reach out! You can submit the form below, or contact me
                        directly via email or LinkedIn. I look forward to
                        hearing from you!
                    </p>
                    <div className="mt-6 flex gap-4">
                        {SocialIcons.map((e) => {
                            return (
                                <SocialIcon
                                    social={e.social}
                                    href={e.href}
                                    icon={e.icon}
                                    darkIcon={e.darkIcon}
                                    className={e.className}
                                />
                            );
                        })}
                    </div>
                </div>
                <Form />
            </div>
        </div>
    );
}

export default Contact;
