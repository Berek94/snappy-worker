export default class FetchError extends Error {
  message = "Ошибка запроса на сторонний ресурс 🤯";

  constructor(error: Error) {
    super(error.message);
    this.name = 'FetchError';

    console.log(`${this.message}: `, error);
  }
}
