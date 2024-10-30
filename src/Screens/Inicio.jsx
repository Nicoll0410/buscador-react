import { Footer } from '../Components/Footer'
import { HeaderComponent } from '../Components/HeaderComponent'
import '../Styles/index.css'

export const Inicio = () => {
    return (
        <>
            <header>
            <HeaderComponent />
                <section className="textos-header">
                    <h1>NM PELICULAS</h1>
                    <h2>EL MEJOR BUSCADOR DE PELICULAS</h2>
                </section>
                <div className="wave" style={{ height: '150px', overflow: 'hidden' }}>
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                        <path d="M0.00,50.13 C149.89,150.43 351.44,-50.13 499.66,50.13 L499.66,150.43 L0.00,150.43 Z" style={{ stroke: 'none', fill: '#ffff' }}></path>
                    </svg>
                </div>
            </header>

            <section className="portafolio">
                <div className="contenedor">
                    <div className="galeria-port">
                        {Array.from({ length: 8 }).map((_, index) => (
                            <div key={index} className="imagen-port">
                                <img src={`img/img${index + 1}.jpg`} alt={`img${index + 1}`} />
                                    <div className="hover-galeria">
                                        <img src="img/goals.png" alt="goals" />
                                    </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
