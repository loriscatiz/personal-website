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
            className="modal w-[90%] max-w-3xl rounded-xl bg-sky-200 px-6 py-8 text-sky-950 dark:bg-sky-900 dark:text-sky-100 mx-auto"
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
                    text="Informativa sulla privacy"
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
                    La tua privacy è molto importante per me e mi impegno a proteggere i tuoi dati personali.
                    Questa informativa spiega quali dati vengono raccolti, come vengono utilizzati e quali sono i tuoi diritti ai sensi del Regolamento Generale sulla Protezione dei Dati (GDPR).
                </p>
                <Title
                    tag={'h3'}
                    className="mt-4 text-lg"
                    text="Titolare del trattamento"
                ></Title>
                <p className="mt-2">
                    Il titolare del trattamento dei dati è:<br />
                    Loris Catizzone<br />
                    Con sede in Italia<br />
                    Email: <a
                        href="mailto:loriscatiz@gmail.com"
                        className='focus:text-sky-400" underline hover:text-sky-400'
                    >
                        loriscatiz@gmail.com
                    </a>
                </p>
                <p className="mt-2">
                    Per qualsiasi domanda o dubbio in merito alla gestione dei tuoi dati personali, puoi contattarmi direttamente via email.
                </p>
                <Title
                    tag={'h3'}
                    className="mt-4 text-lg"
                    text="Dati personali raccolti"
                ></Title>
                <p className="mt-2">
                    I soli dati personali raccolti tramite questo sito sono quelli forniti volontariamente attraverso il modulo di contatto.
                </p>
                <p className="mt-2">
                    Questi includono:
                </p>
                <ul className="mt-2 list-inside list-disc">
                    <li><b>Nome</b>, utilizzato per poterti identificare e rivolgermi a te correttamente</li>
                    <li><b>Indirizzo email</b>, utilizzato per risponderti</li>
                    <li>
                        <b>Contenuto del messaggio</b>, necessario per comprendere la tua richiesta
                    </li>
                </ul>
                <p className="mt-2">
                    Inoltre, Netlify, il provider che ospita questo sito, può registrare automaticamente informazioni tecniche come l’indirizzo IP e l’user agent del browser, esclusivamente per motivi di sicurezza e prevenzione spam.
                    <p className="mt-2">
                        Non vengono utilizzati cookie o strumenti di tracciamento per fini statistici o pubblicitari.
                    </p>
                </p>
                <Title
                    tag={'h3'}
                    className="mt-4 text-lg"
                    text="Finalità del trattamento"
                ></Title>
                <p className="mt-2">
                    I tuoi dati vengono utilizzati solo per rispondere alle richieste inviate tramite il modulo di contatto.
                    Non condivido, vendo o utilizzo i dati personali per finalità di marketing.
                </p>
                <p className="mt-2">
                    Le comunicazioni inviate tramite il form sono gestite da Netlify Forms, un servizio offerto da Netlify.
                    Netlify può trattare e conservare i dati sui propri server.
                    Per ulteriori dettagli, puoi consultare la <a
                        href="https://www.netlify.com/privacy/"
                        target="_blank"
                        className='focus:text-sky-400" underline hover:text-sky-400'
                    >
                        Privacy Policy di Netlify
                    </a>
                </p>
                <Title
                    tag={'h3'}
                    className="mt-4 text-lg"
                    text="Base giuridica del trattamento"
                ></Title>
                <p className="mt-2">
                    Ai sensi del GDPR, la base giuridica del trattamento è il consenso dell’utente.
                    Inviando il modulo di contatto, acconsenti al trattamento dei tuoi dati come descritto in questa informativa.
                </p>
                <Title
                    tag={'h3'}
                    className="mt-4 text-lg"
                    text="Tempi di conservazione"
                ></Title>
                <p className="mt-2">
                    I dati vengono conservati solo per il tempo necessario a gestire la tua richiesta, e comunque non oltre 1 anno dalla data di invio.
                    Trascorso tale periodo, i dati saranno eliminati in modo permanente.
                </p>
                <Title
                    tag={'h3'}
                    className="mt-4 text-lg"
                    text="Diritti dell’interessato"
                ></Title>
                <p className="mt-2">
                    Hai il diritto di:
                </p>
                <ul className="mt-2 list-inside list-disc">
                    <li>
                        Accedere ai tuoi dati personali
                    </li>
                    <li>
                        Chiedere la rettifica o cancellazione dei dati
                    </li>
                    <li>
                        Opporti al trattamento
                    </li>
                    <li>
                        Revocare il consenso in qualsiasi momento
                    </li>
                </ul>
                <p className="mt-2">
                    Per esercitare questi diritti puoi contattarmi via email.
                </p>
                <Title
                    tag={'h3'}
                    className="mt-4 text-lg"
                    text="Sicurezza dei dati"
                ></Title>
                <p className="mt-2">
                    Adotto misure tecniche adeguate per proteggere i dati personali da accessi non autorizzati, perdita o uso improprio.
                    Tuttavia, nessuna trasmissione di dati su Internet può essere considerata completamente sicura.
                </p>
                <Title
                    tag={'h3'}
                    className="mt-4 text-lg"
                    text="Modifiche all’informativa"
                ></Title>
                <p className="mt-2">
                    Questa informativa potrà essere aggiornata nel tempo.
                    Eventuali modifiche verranno pubblicate su questa pagina, con la data dell’ultimo aggiornamento indicata in alto.
                </p>
                <Button
                    className="mt-4 self-start"
                    onClick={(e) => {
                        e.preventDefault(); // Prevent the default anchor behavior
                        closeModal();
                    }}
                    text={'chiudi'}
                    variant={''}
                ></Button>
            </div>
        </dialog>
    );
}

export default PrivacyPolicyModal;
