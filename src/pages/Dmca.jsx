import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Dmca() {
    useEffect(() => {
        document.title = 'DMCA - zmov';
        window.scrollTo(0, 0);
    })

    return (
        <>
            <Header />
            <div id="dmca-section">
                <div id="dmca-content">
                    <div>
                        <p>Info
                        </p>
                    </div>
                    <div>
                        <p>Credits</p>
                        <ul>
                            <li>Cullin Main Dev</li>
                            <li>Nicholas Kimberley UI Designer</li>
                            <li>Staten Tester;</li>
                            <li>Adam Coder;</li>
                            <li>Cameron Tester;</li>
                    
                        </ul>
                    </div>
                    <div>
                        <p>Contact Here:</p>
                        <a target="_blank" href="mailto:dmca@coen.ovh" rel="noopener noreferrer">
                            <p>dmca@coen.ovh</p>
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
