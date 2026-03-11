import { DomainEvent } from "../../domain/events/events"

export type Observer = (event: DomainEvent) => void

const observers: Observer[] = []

// Subscribe a new observer
export function subscribe(observer: Observer): void {
	observers.push(observer)
}

// Notify all observers
export function notify(event: DomainEvent): void {
	observers.forEach((observer) => observer(event))
}
