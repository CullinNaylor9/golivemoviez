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
                        <p>Staten Is The best
                        </p>
                    </div>
                    <div>
                        <p>DMCA Report requirements</p>
                        <ul>
                            <li>A description of the copyrighted work that you claim is being infringed;</li>
                            <li>A description of the material you claim is infringing and that you want removed or access to which you want disabled with a URL and proof you are the original owner or other location of that material;</li>
                            <li>Your name, title (if acting as an agent), address, telephone number, and email address;</li>
                            <li>The following statement: &quot;I have a good faith belief that the use of the copyrighted material I am complaining of is not authorized by the copyright owner, its agent, or the law (e.g., as a fair use)&quot;</li>
                            <li>The following statement: &quot;The information in this notice is accurate and, under penalty of perjury, I am the owner, or authorized to act on behalf of the owner, of the copyright or of an exclusive right that is allegedly infringed&quot;;</li>
                            <li>The following statement: &quot;I understand that I am subject to legal action upon submitting a DMCA request without solid proof.&quot;;</li>
                            <li>An electronic or physical signature of the owner of the copyright or a person authorized to act on the owner&apos;s behalf.</li>
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
