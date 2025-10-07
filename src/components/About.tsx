import Title from './Title';
import Button from './Button';

function About() {
    return (
        <>
            <div className="bg-sky-100 pb-16 pt-24 dark:bg-sky-950">
                <div className="container grid lg:grid-cols-2 lg:gap-8">
                    <img
                        src="/loris.jpg"
                        alt="Loris Catizzone"
                        className="-mt-32 w-full scroll-m-12 rounded-xl shadow-lg"
                        id="about"
                    />
                    <div className="mt-6 flex flex-col items-start lg:mt-0">
                        <Title
                            text="Cosa faccio"
                            tag={'h2'}
                            className={
                                'text-xl text-sky-950 dark:text-sky-100 lg:col-start-2'
                            }
                        ></Title>
                        <Title
                            text="Dalla logica al layout: sviluppo web a 360°"
                            tag={'h3'}
                            className={
                                'text-2xl text-sky-950 dark:text-sky-100 lg:col-start-2'
                            }
                        ></Title>
                        <p className="mt-4 text-sky-900 dark:text-sky-200 lg:col-start-2 lg:text-left">
                            Mi chiamo Loris Catizzone e sviluppo soluzioni web complete, dal front-end al back-end.
                            Mi piace creare interfacce chiare e funzionali, ma anche curare la logica che le sostiene.
                            Negli ultimi anni ho lavorato su progetti che spaziano dal design di landing page allo sviluppo di applicazioni con Python, Django e JavaScript.
                        </p>
                        <p className="mt-2 text-sky-900 dark:text-sky-200 lg:col-start-2 lg:text-left">
                            Oggi collaboro come freelance con aziende e professionisti, aiutandoli a trasformare idee in prodotti digitali concreti e ben strutturati.
                        </p>
                        <Button
                            text="Contattami"
                            variant={'primary'}
                            href={'#contact'}
                            className="mt-4 lg:col-start-2"
                        ></Button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default About;
