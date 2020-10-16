import BaseError from "../common/BaseError";

export default class FetchError extends BaseError {
  constructor(error: Error) {
    super(error, 666);
    this.message = "Ошибка запроса на сторонний ресурс 🤯";
  }
}
