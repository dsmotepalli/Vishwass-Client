import classNames from "classnames";
import { useEffect, useCallback } from "react";

const ButtonComponent = (props: any) => {
    const btnClickedCallback = useCallback(() => {
        // Execute the original btnClicked function passed as props
        if (props.btnClicked) {
            props.btnClicked();
        }
    }, [props.btnClicked]); // Dependency array includes props.btnClicked

    useEffect(() => {
        // useEffect logic can be added here if needed
    }, []);

    return (
        <button
            type="button"
            id={props.id}
            className={classNames(props.className)}
            onClick={btnClickedCallback} // Use the memoized callback function
        >
            {props.children}
        </button>
    );
}

export default ButtonComponent;
