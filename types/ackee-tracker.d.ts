declare module 'ackee-tracker' {
  export interface IAckeeTrackerOptions {
    ignoreLocalhost?: boolean
    detailed?: boolean
    ignoreOwnVisits?: boolean
  }

  export interface IAckeeTracker {
    record: (domainId: string, attributes?: unknown, callback?: (recordId: string | null) => void) => {
      stop: () => void
    }
    updateRecord: (recordId: string) => {
      stop: () => void
    }
    action: (eventId: string, attributes: {
      key: string
      value: number | null
    }, callback?: (actionId: string | null) => void) => void
    updateAction: (actionId: string, attributes: {
      key: string
      value: number | null
    }) => void
  }

  export function create(server: string, options?: IAckeeTrackerOptions): IAckeeTracker
  
  export function detect(): void
  
  export function attributes(detailed?: boolean): Record<string, unknown>
}

