export class BadRequestException extends Error {
    constructor(message) {
      super(message);
      this.name = "BadRequestException";
      this.statusCode = 400;
    }
  }
  export class UnAuthorizedException extends Error {
    constructor(message) {
      super(message);
      this.name = "UnAuthorizedException";
      this.statusCode = 401;
    }
  }
  class ForbiddenException extends Error {
    constructor(message) {
      super(message);
      this.name = "ForbiddenException";
      this.statusCode = 403;
    }
  }
  
  export class ConflitException extends Error {
    constructor(message) {
      super(message);
      this.name = "ConflitException";
      this.statusCode=400
    }
  }
  export class NotFoundException extends Error {
    constructor(message) {
      super(message);
      this.name = "NotFoundException";
      this.statusCode=404
    }
  }
  
  export class TooManyRequestException extends Error {
      constructor(message) {
        super(message);
        this.name = "TooManyRequestException";
        this.statusCode=420
      }
    }
  
    export class InternalServerException extends Error {
      constructor(message) {
        super(message);
        this.name = "InternalServerException";
        this.statusCode=500
      }
    }
  
    export class ValidationException extends Error {
      constructor(message,errors) {
        super(message);
        this.name = "ValidationException";
        this.statusCode=422
        this.errors=errors
      }
    }