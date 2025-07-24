/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ComponentType } from "react";

interface RenderListProps<T> {
    data: T[];
    resourceName: string;
    listItem: ComponentType<any>;
}

const RenderList = <T,>({ data, resourceName, listItem: ItemComponent }: RenderListProps<T>) => {
    return (
        <div>
            {data.map((item, i) => (
                <ItemComponent
                    key={i}
                    {...{ [resourceName]: item }}
                />
            ))}
        </div>
    )
}

export default RenderList