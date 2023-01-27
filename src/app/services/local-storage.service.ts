import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService extends StorageService {
  constructor() {
    // Storage is injected due to it is required by the service
    super(window.localStorage);
  }
}
