import BN from 'bn.js';

export function toSec(time: number | string | Date): number {
    const t = time instanceof Date ? time.getTime() : time

    return Math.floor(+t / 1000)
}

export function toBN(val: number | string): BN {
    if (typeof val === 'number') {
        if (!Number.isSafeInteger(val)) {
            throw new Error('integer is not safe')
        }
        return new BN(val)
    }

    if (val.startsWith('0x')) {
        return new BN(trim0x(val), 'hex')
    }

    return new BN(val)
}

export function trim0x(data: string): string {
    if (data.startsWith('0x')) {
        return data.substring(2)
    }

    return data
}