export default function Footer() {
    return (
        <footer className="p-2.5 border-t-2 border-t-sky-200 text-center ">
            {/* 년도 자동 추적 및 할당 */}
            <p>© {new Date().getFullYear()}. SeHi. All rights reserved.</p>
        </footer>
    );
}