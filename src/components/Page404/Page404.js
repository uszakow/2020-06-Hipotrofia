import React from 'react';

import Banner from '../Banner/Banner';
import bannerPhoto from '../../img/Banner/background.png';

function Page404() {
    return (
        <>
            <Banner photo={bannerPhoto} />
            <div className="container">
                <h1>
                    Ta strona nie istnieje lub została usunięta
                </h1>
                <p>
                    Jeżeli trafiłeś na tę stronę z innego linku, napisz wiadomość na adres e-mail <a href="mailto:test@test.test">test@test.test</a>
                </p>
            </div>
        </>
    )
}

export default Page404;

//author: Paweł Uszakow