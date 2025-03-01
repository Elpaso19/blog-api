import { config } from "dotenv";

class ConfigService {
  constructor() {
    config();
  }

  get(key) {
    return process.env[String(key).toUpperCase()];
  }

  getOrThrow(key) {
    const value = this.get(key);
    if (!value) {
      throw new Error(`Missing environment variable: ${key}`);
    }
    return value;
  }
}



export default new ConfigService()
