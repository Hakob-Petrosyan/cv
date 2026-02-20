import clsx from "clsx";
import './button.css';


export default function Button({children, active}){
    return(
        <button className={clsx('btn-main', 'fontHalvarBreit', {active}) }>
            {children}
        </button>
    )
}

