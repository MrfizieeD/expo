// Copyright 2022-present 650 Industries. All rights reserved.

#import <ExpoModulesCore/EXJavaScriptRuntime.h>
#import <ExpoModulesCore/TypedArray.h>

// We need to redefine the C++ enum (see TypedArray.h) in an Objective-C way to expose it to Swift.
// Please keep them in-sync!
typedef NS_ENUM(NSInteger, EXTypedArrayKind) {
  Int8Array = 1,
  Int16Array = 2,
  Int32Array = 3,
  Uint8Array = 4,
  Uint8ClampedArray = 5,
  Uint16Array = 6,
  Uint32Array = 7,
  Float32Array = 8,
  Float64Array = 9,
} NS_SWIFT_NAME(TypedArrayKind);

@interface EXJavaScriptTypedArray : NSObject

@property (nonatomic) EXTypedArrayKind kind;

#ifdef __cplusplus
- (nonnull instancetype)initWith:(std::shared_ptr<expo::TypedArrayBase>)typedArrayPtr
                         runtime:(nonnull EXJavaScriptRuntime *)runtime;
#endif

- (EXTypedArrayKind)kind;

@end
