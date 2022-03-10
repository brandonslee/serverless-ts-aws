import {
    APIGatewayProxyEvent,
    Context,
    Handler,
    APIGatewayProxyResult
} from 'aws-lambda';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { response } from "../common/helper";
import { dynamodb, TABLE_TODOS } from "../database/dynamodb";
import HttpStatusCode from '../common/httpStatusCode';
import { AWSError } from 'aws-sdk';

export const all: Handler = async (
    _event: APIGatewayProxyEvent,
    _context: Context
): Promise<APIGatewayProxyResult> => {
    let data: DocumentClient.ScanOutput;
    try {
        data = await dynamodb
            .scan({
                
                TableName: TABLE_TODOS
            })
            .promise();
    } catch (e: any) {
        return response(HttpStatusCode.INTERNAL_SERVER_ERROR, {
            result: false,
            message: e.toString()
        });
    }

    return response(HttpStatusCode.OK, {
        result: true,
        data
    });
};
