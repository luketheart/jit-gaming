
import {Entry} from "@artela/aspect-libs";
import {Aspect} from "./aspect/aspect";

const aspect = new Aspect();
const entry = new Entry(null, aspect, aspect, null);

export function execute(methodPtr: i32, argPtr: i32): i32 {
    return entry.execute(methodPtr, argPtr);
}

export function isBlockLevel(): i32 {
    return entry.isBlockLevel();
}

export function isTransactionLevel(): i32 {
    return entry.isTransactionLevel();
}

export function isTransactionVerifier(): i32 {
    return entry.isTransactionVerifier();
}

export function allocate(size: i32): i32 {
    return heap.alloc(size) as i32;
}