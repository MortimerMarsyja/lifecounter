import { BehaviorSubject } from "rxjs";

export class SubjectManager<T> {
  private subject$ = new BehaviorSubject<T | null>(null);

  get getSubject() {
    return this.subject$.value;
  }

  setSubject(value: T) {
    this.subject$.next(value);
  }
}
