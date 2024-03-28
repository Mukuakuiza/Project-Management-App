
const Button = ({children, ...props}) => {

    return (
        <button {...props} className='px-4 py-2 text-xs md:text-base rounded-md bg-white text-black hover:bg-yellow-50'>{children}</button>
    );
};

export default Button;