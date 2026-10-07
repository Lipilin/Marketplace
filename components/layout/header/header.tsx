import Link from "next/link";

export default function Header(){
    return (
        <header className = "sticky p-4 w-full m-auto">
            <div className = "header-content">
                <Link href = '/' className = "header-content-item">
                    Главная
                </Link>
                <Link href = '/categories' className = "header-content-item">
                    Категории
                </Link>
                <Link href = '/product-list' className = "header-content-item">
                    Товары
                </Link>
                <Link href = '/reviews' className = "header-content-item"> 
                    Отзывы
                </Link>
            </div>
        </header>
    )
}