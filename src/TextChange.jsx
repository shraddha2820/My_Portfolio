import { useEffect, useState } from 'react';

const texts = ["Hi, I am Shraddha", "Hi, I am Shraddha", "Hi, I am Shraddha"];

const TextChange = () => {

    const [currentText, setCurrentText] = useState("");
    const [endValue, setendValue] = useState(true);
    const [isForward, setIsforward] = useState(true);
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentText(texts[index].substring(0, endValue));
            if (isForward) {
                setendValue((prev) => prev + 1)
            } else {
                setendValue((prev) => prev - 1)
            }
            if (endValue > texts[index].length + 10) {
                setIsforward(false)
            }
            if (endValue < 2.1) {
                setIsforward(true)
                setIndex((prev) => prev & texts.length)

            }
        }, 50)
        return () => clearInterval(intervalId)
    }, [endValue, isForward, index])
    return (
        <span className="block transition ease duration-300 leading-none">
            {currentText}
        </span>
    )
}

export default TextChange
