import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';

const CreateForm = () => {
    const formBuilderRef = useRef();

    useEffect(() => {
        const loadScripts = async () => {
            // Charge jQuery de manière asynchrone
            await import('jquery').then((jquery) => {
                window.jQuery = window.$ = jquery.default;
            });

            // Charge 'jquery-ui-sortable' de manière asynchrone
            await import('jquery-ui-sortable');

            // Charge 'formBuilder' de manière asynchrone
            await import('formBuilder');

            // Initialise formBuilder
            /* global $ */
            formBuilderRef.current = $(formBuilderRef.current).formBuilder();
        };

        loadScripts();
    }, []);

    return (
        <div className='CreateForm'>
            <Navbar />
            <div id="formeGenerator" ref={formBuilderRef}></div>
        </div>
    );
};

export default CreateForm;
