import Form from './Form';
import Title from './Title';
import SocialIcon from './SocialIcon';

function Contact() {
    const SocialIcons = [
        {
            social: 'linkedin',
            href: 'https://www.linkedin.com/in/loris-catizzone/',
            icon: '/linkedin.svg',
            darkIcon: '/linkedin.svg',
            index: 1,
        },
        {
            social: 'github',
            href: 'https://github.com/loriscatiz/',
            icon: '/github.svg',
            darkIcon: '/github-dark.svg',
            index: 2,
        },
        {
            social: 'email',
            href: 'mailto:loriscatiz@gmail.com',
            icon: '/email.svg',
            darkIcon: '/email.svg',
            className: 'bg-indigo-700 p-1',
            index: 3,
        },
    ];

    return (
        <div className="bg-sky-100 py-16 dark:bg-sky-950" id="contact">
            <div className="container grid gap-8 lg:grid-cols-2 lg:gap-12">
                <div>
                    <Title
                        tag={'h2'}
                        className="gap-x-8 text-2xl text-sky-950 dark:text-sky-100 md:text-4xl"
                        text="Contact me"
                    ></Title>
                    <p className="mt-6 text-xl text-sky-900 dark:text-sky-200">
                        Got a question or want to collaborate? Feel free to
                        reach out! You can submit the form or contact me
                        directly via email or LinkedIn. I look forward to
                        hearing from you!
                    </p>
                    <div className="mt-8 flex gap-8">
                        {SocialIcons.map((e) => {
                            return (
                                <SocialIcon
                                    social={e.social}
                                    href={e.href}
                                    icon={e.icon}
                                    darkIcon={e.darkIcon}
                                    className={e.className}
                                    key={e.index}
                                />
                            );
                        })}
                    </div>
                </div>
                <Form></Form>
            </div>
        </div>
    );
}

export default Contact;
