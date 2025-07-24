import type { ReactNode } from "react"

interface SplitScreenProps {
    children: [ReactNode, ReactNode];
    leftWeight: number;
    rightWeight: number;
}

const SplitScreen = ({ children, leftWeight }: SplitScreenProps) => {
    const [left, right] = children;

    const leftWidth = `${leftWeight}rem`;
    // const rightWidth = `${rightWeight}rem`;

    return (
        <section className="flex flex-1 h-full">
            <div style={{ width: leftWidth }} className="left">{left}</div>
            {/* <div style={{ width: rightWidth }} className="right">{right}</div> */}
            <div className="right flex-1">{right}</div>
        </section>
    )
}

export default SplitScreen