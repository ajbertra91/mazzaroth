import { createAPIMethod } from "./createAPIMethod";

export const getSign = createAPIMethod<
    { id: string }, // the input
    { name: string } // the output
>({
    method: "GET",
    url: "/sign",
});