const get = async (
    url: string,
    input: Record<string, string>
) => {
    return fetch(
        `${url}?${new URLSearchParams(input).toString()}`
    );
};

const post = async (
    url: string,
    input: Record<string, string>
) => {
    return fetch(url, {
        method: "POST",
        body: JSON.stringify(input),
    });
};

type CreateAPIMethod = <
    TInput extends Record<string, string>,
    TOutput
>(opts: {
    url: string;
    method: "GET" | "POST";
}) => (input: TInput) => Promise<TOutput>;

const createAPIMethod: CreateAPIMethod = (opts) => (input) => {
    const method = opts.method === "GET" ? get : post;
    return (
        method(opts.url, input)
            .then((res) => res.json())
            .catch((error) => console.log(error))
    )
};

export {
    createAPIMethod,
    type CreateAPIMethod
};

/**
 * usage
 */
// const getUser = createAPIMethod<
//     { id: string }, // the input
//     { name: string } // the output
// >({
//     method: "GET",
//     url: "/user",
// });

// getUser({ id: "123" }).then((user) => {
//     console.log(user);
// });