import './sweet/setUpErrorManager.fx';
import './web';

export type * from './ts-declarations/global';

export { default as NativeModule } from './NativeModule';
export { default as SharedObject } from './SharedObject';
export { default as SharedRef } from './SharedRef';

export { default as Platform } from './Platform';
export { default as uuid } from './uuid';

export { default as EventEmitter, type EventSubscription } from './EventEmitter';
export type { ProxyNativeModule } from './NativeModulesProxy.types';
export { requireNativeViewManager } from './NativeViewManagerAdapter';

export * from './requireNativeModule';
export * from './registerWebModule';
export * from './TypedArrays.types';

export * from './PermissionsInterface';
export * from './PermissionsHook';

export * from './Refs';

export * from './hooks/useReleasingSharedObject';
export * from './reload';

// Errors
export { CodedError } from './errors/CodedError';
export { UnavailabilityError } from './errors/UnavailabilityError';

// Deprecated
export { LegacyEventEmitter } from './LegacyEventEmitter';
export { default as NativeModulesProxy } from './NativeModulesProxy';
