export default function Footer(){
    return (
        <footer className = "fixed p-4 bottom-0 w-full m-auto">
            <div className = "footer-content w-full flex justify-center gap-3">
                <span>
                    Проект Маркетплейс 2026 - { new Date().getFullYear() }
                </span>
                <span>
                    Пет-проект на React + TS + Next.js
                </span>
            </div>
        </footer>
    );
}
