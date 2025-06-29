type BtnProps = {
    title: string;
    className?: string;
    onClick?: () => void;
}

const Btn = ({title, className, onClick}:BtnProps) => {
    return (
        <div className={className}>
            <button onClick={onClick} className='px-6 py-3 bg-#020812 rounded-full text-white hover:shadow-lg hover:shadow-zinc-700 hover:scale-110 transition duration-200 ease-in-out transform hover:rotate-2' style={{backgroundColor:'#020812'}}>
                {title}
            </button>
        </div>
    )
}

export default Btn