import { http, HttpResponse } from 'msw';
import { signs } from './responses/signs';

export const handlers = [
    http.get('/sign', ({ params }) => {
        const { signId } = params;

        if (!signId || (Array.isArray(signId) && !signId[0]) || !signs[signId as string]) {
            return HttpResponse.json({
                error: `No Sign found for signId:  ${signId}`,
                sign: null,
            })
        }

        const resolvedSignId = Array.isArray(signId) ? signId[0] : signId;

        return HttpResponse.json({
            error: null,
            sign: signs[resolvedSignId],
        })
    }),
]
