function TailwindLib() {
    return (
        <>
            <div className="p-4">
                <h1 className="text-2xl font-bol">
                    Tailwind CSS Library
                </h1>
                <p className="text-gray-600">
                    This is a Tailwind CSS library page.
                </p>
            </div>
            <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center gap-x-4 hover:bg-slate-50">
                <div className="shrink-0">
                    <img
                        className="size-12"
                        src="/img/logo/SeHi_Logo_NoTitle.svg"
                        alt="ChitChat Logo"
                    />
                </div>
                <div>
                    <div className="text-xl font-medium text-black">
                        ChitChat
                    </div>
                    <p className="text-slate-500">You have a new message!</p>
                </div>
            </div>
        </>
    );
}

export default TailwindLib;
