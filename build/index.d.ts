/** Rest parameter */
export declare type TCallback = (...restParams: any[]) => any;
declare class EventBusBuild {
    /**
     * Register event once
     * @param name eventName
     * @param callback function with rest params
     * @returns none
     */
    $once(name: string, callback: TCallback): void;
    /**
     * Register event
     * @param name eventName
     * @param callback function with restParams
     * @returns none
     */
    $on(name: string, callback: TCallback): void;
    /**
     * un-register event
     * @param name eventName
     * @param callback function
     * @returns none
     */
    $off(name: string, callback: TCallback): void;
    /**
     * Un-register all by eventName
     * @param name eventName
     * @returns none
     */
    $offAll(name: string): void;
    /**
     * Notify all event
     * @param name eventName
     * @param params restParams
     * @returns none
     */
    $emit(name: string, ...params: any[]): void;
    /** Reset all event */
    $reset(): void;
    /** Get all event */
    eventNames(): string[];
}
declare let EventBus: EventBusBuild;
declare const $once: (name: string, callback: TCallback) => void, $on: (name: string, callback: TCallback) => void, $off: (name: string, callback: TCallback) => void, $offAll: (name: string) => void, $emit: (name: string, ...params: any[]) => void, $reset: () => void, eventNames: () => string[];
export { $once, $on, $off, $offAll, $emit, $reset, eventNames, EventBus as eventBus, };
export default EventBus;
