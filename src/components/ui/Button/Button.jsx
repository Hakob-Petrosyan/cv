import clsx from "clsx";
import './button.css';


export default function Button({children, active, ...props}){
    return(
        <button {...props} className={clsx('btn-main', 'fontHalvarBreit', {active}) }>
            {children}
        </button>
    )
}

