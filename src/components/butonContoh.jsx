function Button({ text, onClick }) {
    if (!children) {
        return null;
    }
    return (
        <>
            <div className="w-full mx-auto text-center my-12">
                <button onClick={onClick}>
                    <p>{text}</p>
                </button>
            </div>
            <div className="w-full mx-auto text-center my-12">
                <button onClick={onClick}>
                    <p>{text}</p>
                </button>
            </div>
        </>
    );
}

export default Button;
