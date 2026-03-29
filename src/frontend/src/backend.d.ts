import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Message {
    submitted: Time;
    name: string;
    message: string;
    phone: string;
}
export type Time = bigint;
export interface backendInterface {
    getAllMessages(): Promise<Array<Message>>;
    submitMessage(name: string, phone: string, message: string): Promise<void>;
}
