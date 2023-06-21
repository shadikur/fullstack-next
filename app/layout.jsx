import "@styles/globals.css";

export const metadata = {
    title: "Promptopia",
    description: "A place to share your prompts and get inspired.",
}


const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <div className="main">
                    <div className="gradient">

                    </div>
                </div>
                <div className="app">
                    {
                        children
                    }
                </div>
            </body>
        </html>
    );
};

export default RootLayout;