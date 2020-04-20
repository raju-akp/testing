import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  userData: any

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'))
    return user !== null
  }

  // Functions
  public removeFromStorage(name): void {
    localStorage.removeItem(name);
    localStorage.removeItem(name + '_time');
  }

  public saveInStorage(name, value, expires) {

    if (expires == undefined || expires == 'null') { expires = 3600; } // default: 1h
    const date = new Date();
    const schedule = Math.round((date.setSeconds(date.getSeconds() + expires)) / 1000);

    localStorage.setItem(name, value);
    localStorage.setItem(name + '_time', schedule.toString());
  }

  public isInStorage(name) {
    const date = new Date();
    const current = Math.round(+date / 1000);

    // Get Schedule
    const storedtimeStr: string = localStorage.getItem(name + '_time');
    let storedtime = Number.parseInt(storedtimeStr, 2);
    if (storedtime == undefined) { storedtime = 0; }

    // Expired
    if (storedtime < current) {
      this.removeFromStorage(name);
      return 0;
    } else {
      return 1;
    }
  }
}
