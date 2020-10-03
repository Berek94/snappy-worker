export default class VkApiError extends Error {
  code: number;

  constructor(error: Error, code: number) {
    super(error.message);
    this.message = error.message;
    this.code = code;

    console.error({ message: this.message, code });
    console.error(error);
  }
}
