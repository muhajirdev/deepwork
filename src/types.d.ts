declare module "@sindresorhus/do-not-disturb" {
  export function enable(): Promise<void>;
  export function disable(): Promise<void>;
  export function toggle(force: boolean): Promise<void>;
  export function isEnabled(force: boolean): Promise<boolean>;
}
