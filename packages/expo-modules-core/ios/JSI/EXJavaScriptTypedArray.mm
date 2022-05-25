// Copyright 2022-present 650 Industries. All rights reserved.

#import <ExpoModulesCore/EXJavaScriptTypedArray.h>

@implementation EXJavaScriptTypedArray {
  __weak EXJavaScriptRuntime *_runtime;

  std::shared_ptr<expo::TypedArrayBase> _typedArrayPtr;
}

- (instancetype)initWith:(std::shared_ptr<expo::TypedArrayBase>)typedArrayPtr
                 runtime:(EXJavaScriptRuntime *)runtime
{
  if (self = [super init]) {
    _runtime = runtime;
    _typedArrayPtr = typedArrayPtr;
    _kind = (EXTypedArrayKind)typedArrayPtr->getKind(*[runtime get]);
  }
  return self;
}

@end
