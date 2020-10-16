import BaseError from "../../common/BaseError";

export default class VkApiError extends BaseError {
  constructor(error: Error, code: number) {
    super(error, code);
    this.message = error.message;
    this.code = code;
  }
}
