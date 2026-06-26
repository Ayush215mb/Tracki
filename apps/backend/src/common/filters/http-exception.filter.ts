import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { ApiErrorResponse } from '@tracki/constants';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<Response>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message =
      exception instanceof HttpException
        ? this.extractMessage(exception)
        : 'Internal server error';

    if (!(exception instanceof HttpException)) {
      // Log the real error server-side for debugging — don't leak it to the client.
      console.error(exception);
    }

    const body: ApiErrorResponse = {
      success: false,
      message,
      statusCode: status,
    };
    response.status(status).json(body);
  }

  private extractMessage(exception: HttpException): string {
    const res = exception.getResponse();
    if (typeof res === 'string') return res;
    if (typeof res === 'object' && res !== null && 'message' in res) {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
      const msg = (res as { message: unknown }).message;
      return Array.isArray(msg) ? msg.join(', ') : String(msg);
    }
    return exception.message;
  }
}
