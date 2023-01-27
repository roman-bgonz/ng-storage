export abstract class StorageService implements Storage {
  constructor(protected readonly api: Storage) {}

  /**
   * Method is overrided to improve it's implementation
   * @param key Key name
   * @param value Value to store
   */
  setItem(key: string, value: unknown): void {
    if (value) {
      const data = JSON.stringify(value);
      this.api.setItem(key, data);
    }
  }

  /**
   * Method is overrides to return parsed data to a know element
   * @param key Key name
   * @returns Parsed data
   */
  getItem<T>(key: string): T | null {
    const data = this.api.getItem(key);
    if (data) {
      return JSON.parse(data) as T;
    }
    return null;
  }

  clear(): void {
    this.api.clear();
  }

  key(index: number): string | null {
    return this.api.key(index);
  }
  removeItem(key: string): void {
    this.api.removeItem(key);
  }

  get length(): number {
    return this.api.length;
  }
}
