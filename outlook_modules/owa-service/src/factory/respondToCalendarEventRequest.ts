// This file is auto-generated by the "tsproxygen.exe" tool. Manual modification is not recommended.
import type RespondToCalendarEventRequest from '../contract/RespondToCalendarEventRequest';

export default function respondToCalendarEventRequest(
    data: RespondToCalendarEventRequest
): RespondToCalendarEventRequest {
    let result: RespondToCalendarEventRequest = {
        __type: 'RespondToCalendarEventRequest:#Exchange',
        ...data,
    };

    return result;
}