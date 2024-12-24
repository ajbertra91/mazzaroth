import { createAPIMethod } from "./createAPIMethod";
import { SignData } from '@appTypes/SignData';

export const getSign = createAPIMethod<
    { signId: string }, // the input
    {
        error: string | null,
        sign: SignData,
    } // the output
>({
    method: "GET",
    url: "/sign",
});