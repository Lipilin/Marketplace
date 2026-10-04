export default function Footer(){
    return (
        <footer className = "sticky p-4 w-full m-auto">
            <div className = "footer-content w-full flex justify-center gap-3 text-center">
                <span>
                    © 2026 - { new Date().getFullYear() } Marketplace
                    <br></br>
                    Пет-проект на React + TS + Next.js
                </span>
            </div>
        </footer>
    );
}
