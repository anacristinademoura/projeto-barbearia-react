import React, { useState } from 'react';
import './style.css';

export default function LandingPage () {

    const modoClaro = 'modo-claro';
    const modoEscuro = 'modo-escuro';

    const [temaEscuro, setTemaEscuro] = useState(false);

    const alterarTema = () => {
        setTemaEscuro(!temaEscuro)
    }

    return (
        <div className={temaEscuro ? modoEscuro : modoClaro}>
            <header>
                <div className='topo limita-secao'>
                    <img className="logotipo" src= {process.env.PUBLIC_URL + 'assets/barbearia-logo.png'} alt='logotipo' title='BarberShop'/>
                    <button onClick={alterarTema} className={temaEscuro ? modoEscuro : modoClaro}>
                        <img className="btn-img" src= {temaEscuro ? 'assets/sun.png' : 'assets/moon.png'}/>
                        {temaEscuro ? 'Light' : 'Dark'}
                    </button>
                </div>
            </header>

            <section className='secao-banner'></section>

            <section className='secao-sobre limita-secao'>
                <div>
                    <h1>Bem-vindo a Barber Shop</h1>
                    <p>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</p>
                    <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>
                    <p className='assinatura'>S. Kelly</p>
                </div>
            </section>
        </div>
    );
};