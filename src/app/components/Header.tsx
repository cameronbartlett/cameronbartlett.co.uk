interface HeaderProps {
    /** The small label above the title */
    eyebrow?: string;
    /** The main large heading */
    title: string;
    /** The body text (accepts strings or JSX elements like links) */
    description?: React.ReactNode;
}

export const Header = ({ eyebrow, title, description }: HeaderProps) => {
    return (
        <div className="bg-white py-24 sm:py-32 dark:bg-gray-900">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <p className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">
                        {eyebrow}
                    </p>
                    <h2 className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl dark:text-white">
                        {title}
                    </h2>
                    <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Header;
