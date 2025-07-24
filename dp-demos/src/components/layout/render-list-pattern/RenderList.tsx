/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ComponentType } from "react";

interface ListProps<T> {
    data: T[];
    resourceName: string;
    listItem: ComponentType<any>;
}

const RenderList = <T,>({ data, resourceName, listItem: ItemComponent }: ListProps<T>) => {
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