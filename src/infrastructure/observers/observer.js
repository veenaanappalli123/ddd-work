const observers = [];
// Subscribe a new observer
export function subscribe(observer) {
    observers.push(observer);
}
// Notify all observers
export function notify(event) {
    observers.forEach((observer) => observer(event));
}
